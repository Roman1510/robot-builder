<template>
  <div>
    <h2>Arms</h2>
    The arms are how your robot will interact with the world. They come in a
    variety of shapes and functions.
    <RobotPartCommon :part-type="arms" />
  </div>
</template>

<script setup>
import RobotPartCommon from './RobotPartCommon.vue'
</script>
