import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
    parts: null,
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale)
    },
  },
  actions: {
    getParts({ commit }) {
      axios
        .get('/api/parts')
        .then((result) => commit('updateParts', result.data))
        .catch(console.error)
    },
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot)
    },
    updateParts(state, parts) {
      state.parts = parts
    },
  },
})