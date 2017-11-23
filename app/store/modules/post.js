// import { Post } from '../../api'
import * as types from '../mutation-types'

const state = {
  posts: []
}

const actions = {
  async [types.FETCH_POST] ({state, commit}, option) {

  },

  async [types.ADD_POST] ({state, commit}, option) {

  },

  async [types.REMOVE_POST] ({state, commit}, option) {

  },

  async [types.UPDATE_POST] ({state, commit}, option) {

  },

  async [types.ADD_COMMENT] ({state, commit}, option) {

  },

  async [types.UPDATE_COMMENT] ({state, commit}, option) {

  }
}

const mutations = {

}

const getter = {
  getList (state) {
    return state.posts
  }
}

export default {
  state,
  actions,
  mutations,
  getter
}
