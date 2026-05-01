<script setup>
import { ref } from 'vue'

const priority = defineProps(['name', 'color', 'check'])
const baseColor = ref('#444343')
const bgColor = ref(baseColor.value)
const isClicked = ref(!priority.check)

function toggleCheck() {
  if (isClicked.value) {
    isClicked.value = false
    bgColor.value = baseColor.value
  } else if (!isClicked.value) {
    isClicked.value = true
    bgColor.value = priority.color
  }
}

toggleCheck()
</script>

<template>
  <div @click="toggleCheck()" :style="{ 'background-color': bgColor }">
    <p>{{ priority.name }}</p>
  </div>
</template>

<style scoped>
div {
  text-align: center;
  margin-right: 0.7em;
  padding: 0.1em;
  border-radius: 4px;
  font-size: 0.75em;
}
</style>
