import { Account } from '../../api'
import * as types from '../mutation-types'

const state = {
  token: null
}

const actions = {
  async [types.LOGIN] ({ commit }, { id, password }) {
    const result = await Account.login(id, password)
    if (result.error) {
      const error = new Error()
      error.code = error
      throw error
    }
    commit(types.UPDATE_JWT, {
      token: result.token
    })
  },

  async [types.LOGOUT] ({state}) {
    state.token = null
  }
}

const mutations = {
  [types.UPDATE_JWT] (state, { token }) {
    state.token = token
  }
}

export default {
  state,
  actions,
  mutations
}
