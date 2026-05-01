<script setup>
//añadir icono
import { ref } from 'vue'
import { useCollection } from 'vuefire'
import { collection, getFirestore } from 'firebase/firestore'

const db = getFirestore()
var tasks = useCollection(collection(db, 'tareas'))
console.log('tareas counter', tasks)

const restTask = ref(2)
function restTasks() {
  // const checkedTask = ref(tasks.filter((task) => task.checkd == true))
  const checkedTask = tasks.length
  console.log('check', checkedTask)
  return checkedTask
  // restTask.value = checkedTask.length
}

restTasks()
</script>

<template>
  <div>
    <p>{{ restTasks() }} pendientes de un total de {{ tasks.length }} |</p>
    <p class="erase">x Borrar tareas completadas</p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
}

.erase {
  color: #eb8e19;
}
</style>
