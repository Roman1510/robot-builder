<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const counter = computed(() => {
  return store.state.robots.cart.length
})
const rootFoo = computed(() => {
  return store.state.foo
})
const usersFoo = computed(() => {
  return store.state.users.foo
})
const robotsFoo = computed(() => {
  return store.state.robots.foo
})
const rootFooGetter = computed(() => {
  return store.getters.foo
})
const usersFooGetter = computed(() => {
  return store.getters['users/foo']
})
const robotsFooGetter = computed(() => {
  return store.getters['robots/foo']
})
</script>

<template>
  <div>
    root foo:{{ rootFoo }} <br />
    users foo:{{ usersFoo }} <br />
    robots foo:{{ robotsFoo }} <br />
    root foo-getter:{{ rootFooGetter }} <br />
    users foo-getter:{{ usersFooGetter }} <br />
    robots foo-getter:{{ robotsFooGetter }} <br />
  </div>
  <div class="header">
    <nav>
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home' }"
            ><img class="logo" src="./assets/build-a-bot-logo.png" alt="" />
            Build-a-bot</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Build' }">
            Build</router-link
          >
        </li>
        <li class="nav-item cart">
          <router-link class="nav-link" :to="{ name: 'Cart' }">
            Cart</router-link
          >
          <div v-if="counter > 0" class="cart-items">
            {{ counter }}
          </div>
        </li>
      </ul>
    </nav>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar" />
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<style>
body {
  background: linear-gradient(to top, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, sans-serif;
}

main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}

.header {
  display: inline-block;
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}

.nav-link {
  text-decoration: none;
  color: inherit;
}

.router-link-active {
  color: white;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: left;
}

.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}

.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}

.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
</style>
