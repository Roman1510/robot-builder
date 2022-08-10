<script setup>
import { ref } from 'vue'

const part = ref({ title: 'Part title', description: 'part description' })
</script>
<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
  </div>
</template>
<style scoped></style>
