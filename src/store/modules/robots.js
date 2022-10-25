import axios from 'axios'

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
    foo: 'robots-foo',
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale)
    },
    foo(state) {
      return `users-getter/'${state.foo}`
    },
  },
  actions: {
    getParts({ commit }) {
      axios
        .get('/api/parts')
        .then((result) => commit('updateParts', result.data))
        .catch(console.error)
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot]
      return axios
        .post('api/cart', cart)
        .then((resp) => {
          console.log(resp)
          commit('addRobotToCart', robot)
        })
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
}
