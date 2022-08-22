<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const cart = computed(() => {
  return store.state.cart
})

const cartSaleItems = computed(() => {
  return store.getters.cartSaleItems
})
</script>
<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">Robot</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">
            {{ robot.head.title }}
          </td>
          <td class="cost">
            {{ robot.cost }}
          </td>
        </tr>
      </tbody>
    </table>
    <h2 class="saleItems">You saved money on these robots:</h2>
    <table>
      <thead>
        <tr>
          <th class="robot-title">Robot</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cartSaleItems" :key="index">
          <td class="robot-title">
            {{ robot.head.title }}
          </td>
          <td class="cost">
            {{ robot.cost }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
td,
th {
  padding: 5px;
}
.robot-title {
  text-align: left;
  padding-right: 200px;
}
.cost {
  text-align: right;
}

.saleItems {
  margin-top: 50px;
  font-size: 18px;
  color: red;
}
</style>
