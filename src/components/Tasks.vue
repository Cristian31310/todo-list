<script setup>
import { ref } from 'vue'
import Task from './Task.vue'
const prop = defineProps(['tasks'])
</script>

<template>
  <div v-for="task in tasks">
    <Task :info="{ task }" />
  </div>
</template>

<style scoped>
div {
  background-color: #303030;
  border-radius: 4px;
}
</style>
