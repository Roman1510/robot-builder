<script setup>
import { ref } from 'vue'
import getParts from './getParts'

const { parts } = getParts()
const partsAny = ref(parts.value[props.partType])
console.log(parts.value)
const props = defineProps({
  partType: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div v-for="(part, idx) in partsAny" :key="idx">
    <h4>{{ part.title }}</h4>
    <div>{{ part.description }}</div>
  </div>
</template>
<style scoped></style>
