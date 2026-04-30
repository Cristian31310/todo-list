<script setup>
import { ref } from 'vue'
import Task from './Task.vue'
const prop = defineProps(['tasks'])
console.log(prop.tasks)
function printId(i) {
  console.log(i)
}
</script>

<template>
  <div v-for="task in tasks">
    <Task @deleteTask="printId" :info="{ task }" />
  </div>
</template>

<style scoped>
div {
  background-color: #303030;
  border-radius: 4px;
}
</style>
