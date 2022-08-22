import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale)
    },
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot)
    },
  },
})
