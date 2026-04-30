<script setup>
import { ref } from 'vue'
import TaskCounter from './TaskCounter.vue'
import Tasks from './Tasks.vue'
import { useCollection } from 'vuefire'
import { collection, getFirestore } from 'firebase/firestore'

const db = getFirestore()
const text = ref()

var tasks = useCollection(collection(db, 'tareas'))
console.log(tasks)
// const tasks = ref([
//   {
//     name: 'hela',
//     check: false,
//     creation: 0,
//     priority: {
//       low: false,
//       normal: false,
//       high: false,
//     },
//   },
//   {
//     name: 'imprimete',
//     check: true,
//     creation: 0,
//     priority: {
//       low: false,
//       normal: false,
//       high: false,
//     },
//   },
// ])
// const tasks = ref([])
// function getInputText() {
//   tasks.value.push({
//     name: text.value,
//     check: false,
//     creation: 0,
//     priority: {
//       low: false,
//       normal: false,
//       high: false,
//     },
//   })
// }
</script>

<template>
  <div>
    <header>
      <h1>Projecto Vue.js - Cristian Martín</h1>
    </header>
    <div>
      <input
        @keyup.enter="getInputText"
        v-model="text"
        type="text"
        placeholder="¿Que quieres recordar?"
      />
    </div>
    <hr />
    <TaskCounter />
    <hr />
    <Tasks :tasks="tasks" />
    <footer>
      <p>Desarrolado por Cristian Martín</p>
      <p>Código disponible (enlace github)</p>
    </footer>
  </div>
</template>

<style scoped>
input {
  width: 90.3vw;
  height: 6vh;
  padding-left: 3vh;
  margin-bottom: 2vh;
  border: none;
  border-radius: 5px;
}
footer {
  text-align: center;
}
</style>
