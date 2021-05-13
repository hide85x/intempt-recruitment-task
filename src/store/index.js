import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  getters: {
    getPosts(state){
      return state.posts
    },
  },
  mutations: {

    async collectPosts() {
      try {
        const res = await axios('https://jsonplaceholder.typicode.com/posts')
        console.log(666)
        console.log(res.data)
        this.state.posts=res.data

      }
      catch (err) { console.log(err) }
    }
  },
  actions: {
    collectPosts({commit}){
      commit('collectPosts')
    }
  },
  modules: {
  }
})
