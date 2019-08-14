<template>
<div id="app">
    <h1>SOKUSEKI!!</h1>
    <img alt="salmon logo" src="./assets/food_cup_ramen_syouyu.png">
    <el-button type="primary" v-on:click="show">show!</el-button>
    <modal name="OpenProject"
            width="700px"
            height="500px"
            :resizable="true"
            :draggable="true">
        <p>Open your Project</p>
        <li v-for="(Project,id) in Projects" :key="id">
            <router-link to="/Open" class="link" @click.native="OpenProject(Project.id)">Let's start project!!</router-link>
            <span>{{ Project.name }}</span>
            <span>{{ Project.day }}</span>
        </li>
        <el-button type="success" v-on:click="hide">hide</el-button>  
    </modal>
    <el-button @click="reset">Reset</el-button>
    <el-input type="text" v-model="projectName"></el-input>
    <div id="nav">
      <router-link to="/App" class="link">Let's start project!!</router-link>
    </div>
    <router-view/>
</div>
</template>
<script>
import Vue from 'vue'
import Project from './model/Project'
import Task from './model/Task'
import VModal from 'vue-js-modal'
import Current from './model/Current'
Vue.use(VModal)
    export default{
        data(){
            return{
                projectName: '',
                projectDay: '',
                Projects:Project.query().with('tasks').get()
            }
        },
        watch: {
            '$route': function (to, from) {
                if (to.path !== from.path && to.path == '/App') {
                    this.startProject()
                }
            }
        },
        methods:{
            reset:function(){
                Project.deleteAll()
                Task.deleteAll()
                Current.deleteAll()
            },
            startProject:function(){
                Project.insert({
                    data:{
                        name: this.projectName
                    }
                })
                let result = Project.query().where('name',this.projectName).get()
                Current.deleteAll()
                Current.insert({
                    data:{
                        id:result[0].id,
                        name:result[0].name,
                        day:result[0].day
                    }
                })
            },
            OpenProject:function(id){
                Current.deleteAll()
                let result = Project.find(id)
                Current.insert({
                    data:{
                        id:result.id,
                        name:result.name,
                        day:result.day
                    }
                })
            },
            show : function() {
                this.$modal.show('OpenProject');
                },
                hide : function () {
                this.$modal.hide('OpenProject');
                },
        }
    }
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Russo+One&display=swap');
#app {
  font-family: 'Russo One','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
}

.el-input .el-input__inner{
    width: 40%;
}
.link{
    font-size:30px;
}
</style>