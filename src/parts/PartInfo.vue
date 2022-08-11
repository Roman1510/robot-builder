<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import parts from '../data/parts.js'

const route = useRoute()
const { partType, id } = route.params

const part = computed(() => {
  return parts[partType].find((part) => part.id == id)
})
</script>
<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
  </div>
</template>
<style scoped></style>
