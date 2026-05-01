<script setup>
//añadir icono
import { ref } from 'vue'
import { useCollection } from 'vuefire'
import { collection, getFirestore } from 'firebase/firestore'
const db = getFirestore()
var tasks = useCollection(collection(db, 'tareas'))
console.log('tareas counter', tasks)

const restTask = ref(0)
getCompleteTasks()
function getCompleteTasks() {
  restTask.value = tasks.value.filter((task) => task.check === true)
}
// function restTasks() {
//   console.log('terminar', getCompleteTasks().length)
// }
function deleteCompleteTask() {
  // const completedTasks = tasks(() => {
  //   return tasks.value.filter((task) => task.check === true)
  // })
}
// restTasks()
</script>

<template>
  <div>
    <p>{{ restTask.length }} pendientes de un total de {{ tasks.length }} |</p>
    <p class="erase" @click="deleteCompleteTask">x Borrar tareas completadas</p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
}

p {
  padding-left: 0.6em;
}

.erase {
  color: #eb8e19;
}
</style>
