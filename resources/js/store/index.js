import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contatos: []
  },
  mutations: {
      setContatos (state, value){
          state.contatos = value
      },
      addContato (state, value){
          state.contatos.push(value)
      }
    }
})
