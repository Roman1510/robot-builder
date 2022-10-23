<script setup>
import { computed, ref } from 'vue'
import PartSelector from './PartSelector.vue'
import PreviewRobot from './PreviewRobot.vue'
import CollapsibleArea from '../shared/CollapsibleArea.vue'
import { onBeforeRouteLeave } from 'vue-router'
import { useStore } from 'vuex'
import router from '../router'

const store = useStore()
const addedToCard = ref(false)
const selectedRobot = ref({
  head: {},
  torso: {},
  base: {},
  rightArm: {},
  leftArm: {},
})

store.dispatch('robots/getParts')

const availableParts = computed(() => {
  return store.state.robots.parts
})

const addToCard = () => {
  const robot = selectedRobot.value
  const cost =
    robot.head.cost +
    robot.base.cost +
    robot.torso.cost +
    robot.leftArm.cost +
    robot.rightArm.cost
  store
    .dispatch('robots/addRobotToCart', { ...selectedRobot.value, cost })
    .then(() => router.push('/cart'))
  addedToCard.value = true
}

onBeforeRouteLeave((to) => {
  if (to.name == 'Cart') return
  if (addedToCard.value == true) return
  const response = confirm('u rilly wanna quit?')
  return response
})
</script>
<template>
  <div v-if="availableParts" class="content">
    <div class="part-info" id="partInfo"></div>
    <div class="preview">
      <CollapsibleArea
        ><PreviewRobot
          :base="selectedRobot.base.src"
          :head="selectedRobot.head.src"
          :left-arm="selectedRobot.leftArm.src"
          :right-arm="selectedRobot.rightArm.src"
          :torso="selectedRobot.torso.src"
      /></CollapsibleArea>
      <div>
        <button class="add-to-cart" @click="addToCard()">Add to cart</button>
      </div>
    </div>

    <div class="top-row">
      <div class="robot-name">
        {{ selectedRobot.head.title }}
        <span v-if="selectedRobot.head.onSale" class="sale">SALE</span>
      </div>
      <PartSelector
        :parts="availableParts.heads"
        position="top"
        @update="(part) => (selectedRobot.head = part)"
      />
    </div>
    <div class="middle-row">
      <PartSelector
        :parts="availableParts.arms"
        position="left"
        @update="(part) => (selectedRobot.leftArm = part)"
      />
      <PartSelector
        :parts="availableParts.torsos"
        position="center"
        @update="(part) => (selectedRobot.torso = part)"
      />
      <PartSelector
        :parts="availableParts.arms"
        position="right"
        @update="(part) => (selectedRobot.rightArm = part)"
      />
    </div>
    <div class="bottom-row">
      <PartSelector
        :parts="availableParts.bases"
        position="bottom"
        @update="(part) => (selectedRobot.base = part)"
      />
    </div>
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
  width: 200px;
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

.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}

.part-info {
  position: absolute;
  top: -20px;
  left: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
</style>
