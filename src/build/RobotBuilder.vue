<script setup>
import { ref, computed } from 'vue'
import availableParts from '../data/parts'
import {
  getPrevValidIndex,
  getNextValidIndex,
} from '@/helpers/arrayValidations.js'

const selectedHeadIndex = ref(0)
const selectedTorsoIndex = ref(0)
const selectedBaseIndex = ref(0)
const selectedRightArmIndex = ref(0)
const selectedLeftArmIndex = ref(0)
const cart = ref([])

const selectedRobot = computed(() => {
  return {
    head: availableParts.heads[selectedHeadIndex.value],
    torso: availableParts.torsos[selectedTorsoIndex.value],
    base: availableParts.bases[selectedBaseIndex.value],
    rightArm: availableParts.arms[selectedRightArmIndex.value],
    leftArm: availableParts.arms[selectedLeftArmIndex.value],
  }
})

const saleBorderClass = computed(() => {
  return selectedRobot.value.head.onSale ? 'sale-border' : ''
})

const nextHeads = () => {
  selectedHeadIndex.value = getNextValidIndex(
    selectedHeadIndex.value,
    availableParts.heads.length
  )
}
const prevHeads = () => {
  selectedHeadIndex.value = getPrevValidIndex(
    selectedHeadIndex.value,
    availableParts.heads.length
  )
}
const nextTorso = () => {
  selectedTorsoIndex.value = getNextValidIndex(
    selectedTorsoIndex.value,
    availableParts.torsos.length
  )
}
const prevTorso = () => {
  selectedTorsoIndex.value = getPrevValidIndex(
    selectedTorsoIndex.value,
    availableParts.torsos.length
  )
}
const nextLeftArm = () => {
  selectedLeftArmIndex.value = getNextValidIndex(
    selectedLeftArmIndex.value,
    availableParts.arms.length
  )
}
const prevLeftArm = () => {
  selectedLeftArmIndex.value = getPrevValidIndex(
    selectedLeftArmIndex.value,
    availableParts.arms.length
  )
}
const nextRightArm = () => {
  selectedRightArmIndex.value = getNextValidIndex(
    selectedRightArmIndex.value,
    availableParts.arms.length
  )
}
const prevRightArm = () => {
  selectedRightArmIndex.value = getPrevValidIndex(
    selectedRightArmIndex.value,
    availableParts.arms.length
  )
}
const nextBase = () => {
  selectedBaseIndex.value = getNextValidIndex(
    selectedBaseIndex.value,
    availableParts.bases.length
  )
}
const prevBase = () => {
  selectedBaseIndex.value = getPrevValidIndex(
    selectedBaseIndex.value,
    availableParts.bases.length
  )
}

const addToCard = () => {
  const robot = selectedRobot.value
  const cost =
    robot.head.cost +
    robot.base.cost +
    robot.torso.cost +
    robot.leftArm.cost +
    robot.rightArm.cost

  cart.value.push(Object.assign({}, robot, { cost }))
}
</script>
<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCard()">Add to cart</button>
    <div class="top-row">
      <div :class="[saleBorderClass, 'top', 'part']">
        <div class="robot-name">
          {{ selectedRobot.head.title }}
          <span v-if="selectedRobot.head.onSale" class="sale">SALE</span>
        </div>

        <img :src="selectedRobot.head.src" title="head" />
        <button class="prev-selector" @click="prevHeads()">&#9668;</button>
        <button class="next-selector" @click="nextHeads()">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.src" title="left arm" />
        <button class="prev-selector" @click="prevLeftArm()">&#9650;</button>
        <button class="next-selector" @click="nextLeftArm()">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.src" title="torso" />
        <button class="prev-selector" @click="prevTorso()">&#9668;</button>
        <button class="next-selector" @click="nextTorso()">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="right arm" />
        <button class="prev-selector" @click="prevRightArm()">&#9650;</button>
        <button class="next-selector" @click="nextRightArm()">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" title="base" />
        <button class="prev-selector" @click="prevBase()">&#9668;</button>
        <button class="next-selector" @click="nextBase()">&#9658;</button>
      </div>
    </div>
  </div>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th>Robot</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td>{{ robot.head.title }}</td>
          <td class="cost">{{ robot.cost }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
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
.right .next-selector {
  right: -3px;
}

.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}

.sale {
  color: red;
}

.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 3px;
  z-index: 1;
}

th,
td {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}

.cost {
  text-align: right;
}

.sale-border {
  border: 3px solid red;
}
</style>
