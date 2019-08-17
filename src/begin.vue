<template>
<div id="app">
    <el-row :gutter="20">
        <el-col :span="6">
            <el-table
            ref="multipleTable"
            :data="atomList"
            style="width: 30vw"
            @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                    width="55">
                </el-table-column>
                <el-table-column
                    prop="id"
                    label="Atom Id"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="Atom Name"
                    width="120">
                </el-table-column>
                    </el-table>
                </el-col>
        <el-col :span="6">
            <el-table
                ref="singleTable"
                highlight-current-row
                :data="moleculereList"
                @current-change="handleCurrentChange"
                style="width: 40vw">
                
                <el-table-column
                    prop="id"
                    label="Molecule Id"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="Molecule Name"
                    width="150">
                </el-table-column>
            </el-table>
        </el-col>
        <el-col :span="6">
            {{ currentMolecule }}
            <el-table
                :data="currentAtomList"
                style="width: 40vw">
                <el-table-column
                    prop="id"
                    label="Atom Id"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="atomname"
                    label="Atom Name"
                    width="150">
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>

    <el-input v-model="atomName"></el-input>
    <el-button @click="registAtom()">登録</el-button>
    <el-input v-model="moleculeName"></el-input>
    <el-input-number v-model="moleculeType"></el-input-number>
    <el-button @click="registMolecule()">登録</el-button>
</div>
</template>
<script>
import Vue from 'vue'
import VModal from 'vue-js-modal'
import atom from './model/atom'
import molecule from './model/molecule'
//import organism from './model/organism'
Vue.use(VModal)

    export default{
        data(){
            return{
                multipleSelection: [],
                atomList:[],
                moleculereList:[],
                atomName:'',
                moleculeName:'',
                moleculeType:null,
                moleculeMaterial:null,
                atom:{},
                molecule:{},
                organism:{},
                currentAtomList:[],
                currentMolecule:''
            }
        },
        methods:{
            registAtom:function(){
                var submitData={
                    name:this.atomName
                }
                atom.insert({
                    data:submitData
                })
                this.atomrefresh()
            },
            registMolecule:function(){
                var submitData={}
                var submitAtom=[]
                for(var i=0;i<this.multipleSelection.length;i++){
                    submitAtom.push({
                        id:this.multipleSelection[i].id,
                        name:this.multipleSelection[i].name
                    })
                }
                submitData.name=this.moleculeName
                submitData.type=this.moleculeType
                submitData.material=submitAtom
                
                molecule.insert({
                    data:submitData
                })
                this.moleculerefresh()
            },
            handleSelectionChange: function(val) {
                this.multipleSelection = val;
            },
            atomrefresh:function(){
                this.atomList=[]
                var result = atom.all()
                for(var i=0;i<result.length;i++){
                    this.atomList.push({
                        "id":result[i].id,
                        "name":result[i].name
                    })
                }
            },
            moleculerefresh:function(){
                this.moleculereList=[]
                var result = molecule.query().with('material').get()
                for(var i=0;i<result.length;i++){
                    this.moleculereList.push({
                        "id":result[i].id,
                        "name":result[i].name,
                        "type":result[i].type,
                        "material":result[i].material
                    })
                }
            },
            handleCurrentChange:function(val){
                console.log('check')
                // /console.log(val.material[0].name)
                this.currentMolecule = val.name
                console.log(val.material)
                for(var i=0;i<Object.keys(val).length;i++){
                    console.log(i)
                    this.currentAtomList.push({
                        "id":val[i].material[i].id,
                        "atomname":val[i].material[i].name
                    })
                    console.log(this.currentAtomList)
                }
            }
        }
    }
</script>
<style>
#app {
  font-family: 'Russo One','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
}
</style>