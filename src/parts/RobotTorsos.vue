<template>
  <div>
    <h2>Torsos</h2>
    The torso is the central part of your robot that holds everything together.
    Choosing the right torso will help ensure your robot functions well with the
    parts you choose.
    <div v-for="(torso, idx) in torsos" :key="idx">
      <h4>{{ torso.title }}</h4>
      <div>{{ torso.description }}</div>
    </div>
  </div>
</template>

<script setup>
import getParts from './getParts'
import { ref } from 'vue'
const { parts } = getParts()
const torsos = ref(parts.value.torsos)
</script>
