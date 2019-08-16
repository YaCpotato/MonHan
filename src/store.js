import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import atom from './model/atom'
import molecule from './model/molecule'
import organism from './model/organism'
//import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(atom)
database.register(molecule)
database.register(organism)

const store = new Vuex.Store({
  plugins: [VuexORM.install(database),
            ]
            //createPersistedState({ storage: window.sessionStorage })
})

export default store