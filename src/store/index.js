import Vue from 'vue'
import Vuex from 'vuex'
import to from 'await-to-js'
import {connectMetaMask, getNetwork} from '@/utils/getWeb3'
import config from '../service/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // web3: null,
    web3Register: {},
    balance: 0
    // true-The network ID is correct and the account address has been obtained
  },
  getters: {
  },
  mutations: {
    register (state, payload) {
      state.web3Register = payload
    },
    balance(state, payload) {
      state.balance = payload
    }
  },
  actions: {
    getBalance({commit}, data) {
      commit('balance', data)
    },
    async registerWeb3 ({commit}) {
      const [err, accounts] = await to(connectMetaMask())
      const [_err, chainId] = await to(getNetwork())
      const data = {
        accounts: accounts === undefined? '':accounts[0],
        chainId: chainId === undefined? '':chainId,
        isLogin: accounts && chainId === config.chiaIdConfig.chainId
      }
      commit('register', data)
    }
  },
  modules: {
  }
})
