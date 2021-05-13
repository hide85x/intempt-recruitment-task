import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    comments: []
  },
  getters: {
    getPosts(state) {
      return state.posts
    },
    getOnePost: (state) => (postId) => {
      return state.posts.find(el => el.id == postId)
    },
    getComments(state){
      return state.comments}

  },
  mutations: {
    async getPostComments(state, postId) {
      try {
        const comments = await  axios(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        state.comments = comments.data
      }
      catch (err) {
        console.log(err)
      }
    },
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
      let postToUpdate = state.posts.find(el => el.id == postId)
      postToUpdate.title = updatedTitle
      postToUpdate.body = updatedBody
    },
    addPost(state, payload) {
      state.posts.push(payload)
    }
  },
  actions: {
    // getPostComments({ commit }) { commit('getPostComments') },
    collectPosts({ commit }) { commit('collectPosts', ) }
  },
  modules: {
  }

})
