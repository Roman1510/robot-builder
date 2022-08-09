<template>
  <div class="part" :class="[position, saleBorderClass]">
    <img :src="selectedPart.src" title="arm" />
    <button @click="selectPreviousPart()" class="prev-selector"></button>
    <button @click="selectNextPart()" class="next-selector"></button>
    <span class="sale" v-show="selectedPart.onSale">Sale!</span>
  </div>
</template>

<script setup>
/*
  1) refactor in the way so that it works without emits
  2) add mini-map
*/
import { ref, computed } from 'vue'
const props = defineProps({
  parts: { type: Object, required: true },
  position: {
    type: String,
    required: true,
    validator: (value) => {
      return ['top', 'left', 'center', 'right', 'bottom'].includes(value)
    },
  },
})
const emit = defineEmits(['update'])

const selectedPartIndex = ref(0)

const selectedPart = computed(() => {
  return props.parts[selectedPartIndex.value]
})
emit('update', selectedPart.value)

const saleBorderClass = computed(() => {
  return selectedPart.value.onSale ? 'sale-border' : ''
})

const getPreviousValidIndex = (index, length) => {
  const deprecatedIndex = index - 1
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex
}
const getNextValidIndex = (index, length) => {
  const incrementedIndex = index + 1
  return incrementedIndex > length - 1 ? 0 : incrementedIndex
}

const selectNextPart = () => {
  selectedPartIndex.value = getNextValidIndex(
    selectedPartIndex.value,
    props.parts.length
  )
  emit('update', selectedPart.value)
}
const selectPreviousPart = () => {
  selectedPartIndex.value = getPreviousValidIndex(
    selectedPartIndex.value,
    props.parts.length
  )
  emit('update', selectedPart.value)
}
</script>

<style scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.sale {
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: white;
  background-color: red;
  padding: 3px;
}
.part-title {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: red;
  padding-top: 5px;
  top: -25px;
}
.part img {
  width: 165px;
}
.top {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.bottom {
  border-top: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.left .prev-selector:after,
.right .prev-selector:after {
  content: '\25B2';
}
.left .next-selector:after,
.right .next-selector:after {
  content: '\25BC';
}
.top .prev-selector:after,
.bottom .prev-selector:after,
.center .prev-selector:after {
  content: '\25C4';
}
.top .next-selector:after,
.bottom .next-selector:after,
.center .next-selector:after {
  content: '\25BA';
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.highlight {
  border: 1px solid red;
}
</style>
