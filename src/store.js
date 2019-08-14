import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import Project from './model/Project'
import Task from './model/Task'
import Current from './model/Current'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(Project)
database.register(Task)
database.register(Current)

const store = new Vuex.Store({
  plugins: [VuexORM.install(database),
            createPersistedState({ storage: window.sessionStorage })]
})

export default store