<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>
<template>
  <div class="header">
    <div v-if="open" @click="open = !open">TOGGLE ON</div>
    <div v-if="!open" @click="open = !open">TOGGLE OFF</div>
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
