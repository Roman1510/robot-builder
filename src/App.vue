<script setup>
// 1) use slots to make collapsable mini-map
// 2) add routing from the image of the partselector
// 3) remove the part-selector teleporting functionality
</script>

<template>
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
      </ul>
    </nav>
    <main><router-view></router-view></main>
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
  margin: 0 auto;
  margin-top: 10px;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}

.header {
  display: inline-block;
  background-color: #999;
  width: 1084px;
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
</style>
