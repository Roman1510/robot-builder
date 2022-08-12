<script setup>
import { ref } from 'vue'
const open = ref(true)
</script>
<template>
  <div class="header" @click="open = !open">
    <span v-if="open">Hide</span>
    <span v-if="!open">Show</span>
  </div>
  <slot v-if="open"></slot>
</template>
<style scoped>
.header {
  background-color: #bbb;
  padding: 3px;
  cursor: pointer;
  width: 100%;
}
</style>
