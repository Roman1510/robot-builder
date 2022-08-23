<script setup>
import { computed } from 'vue'
import getParts from './getParts'

const props = defineProps({
  partType: { type: String },
  id: {
    type: [String, Number],
    validator: (value) => Number.isInteger(Number(value)),
  },
})

const part = computed(() => {
  const parts = getParts()
  return parts[props.partType].find((part) => part.id == props.id)
})
</script>
<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
  </div>
</template>
<style scoped></style>
