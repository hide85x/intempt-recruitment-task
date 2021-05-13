import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  getters: {
    getPosts(state) {
      return state.posts
    },
    getOnePost: (state) => (postId) => {
      return state.posts.find(el => el.id == postId)

    }
  },
  mutations: {
    async collectPosts() {
      try {
        const res = await axios('https://jsonplaceholder.typicode.com/posts')
        this.state.posts = res.data

      }
      catch (err) { console.log(err) }
    },
    deletePost(state, { postId }) {
      state.posts = state.posts.filter(el => el.id !== parseInt(postId))

    },
    updatePost(state, { postId, updatedTitle, updatedBody }) {
      console.log(updatedBody)
      let postToUpdate = state.posts.find(el => el.id == postId)
      postToUpdate.title = updatedTitle
      postToUpdate.body = updatedBody
    },
    addPost(state, payload) {
      state.posts.push(payload)
    }
  },
  actions: {

    collectPosts({ commit }) {
      commit('collectPosts')
    }
  },
  modules: {
  }

})
