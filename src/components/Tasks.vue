<script setup>
import Task from './Task.vue'
import { useCollection } from 'vuefire'
import { collection, getFirestore } from 'firebase/firestore'

const db = getFirestore()
var tasks = useCollection(collection(db, 'tareas'))
</script>

<template>
  <div v-for="task in tasks" :key="task">
    <Task :info="{ task }" />
  </div>
</template>

<style scoped>
div {
  background-color: #303030;
  border-radius: 4px;
}
</style>
