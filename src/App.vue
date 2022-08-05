<script setup>
import RobotBuilder from './build/RobotBuilder.vue'
import SearchComponent from './search/SearchComponent.vue'
</script>

<template>
  <main>
    <RobotBuilder />
  </main>
  <SearchComponent />
</template>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
}
#app {
  font-family: Avenir, Helvetica, sans-serif;
}

main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
</style>
