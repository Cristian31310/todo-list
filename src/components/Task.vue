<script setup>
import { ref } from 'vue'
import PriorityButtom from './PriorityButtom.vue'

import { updateDoc, getFirestore, deleteDoc, doc } from 'firebase/firestore'

const db = getFirestore()

const taskInfo = defineProps(['info'])

const isNotDelete = ref(true)
const task = ref(taskInfo.info.task)

const isCheck = ref(!task.value.check)
const green = ref('#00BC8C')
const white = ref('#ffffff')
const checkCircleColor = ref('white')

const textStyleNone = ref('none')
const textLineThrough = ref('line-through')
const textStyle = ref(textStyleNone.value)

const low = ref(task.value.priority.low)
const normal = ref(task.value.priority.normal)
const high = ref(task.value.priority.high)

async function toggleCheck() {
  if (isCheck.value) {
    await updateDoc(doc(db, 'tareas', task.value.id), {
      check: false,
    })
    isCheck.value = false
    checkCircleColor.value = white.value
    textStyle.value = textStyleNone.value
  } else if (!isCheck.value) {
    await updateDoc(doc(db, 'tareas', task.value.id), {
      check: true,
    })
    isCheck.value = true
    checkCircleColor.value = green.value
    textStyle.value = textLineThrough.value
  }
}

async function deleteTask() {
  deleteDoc(doc(db, 'tareas', task.value.id))
}

async function updateLow() {
  if (low.value) {
    await updateDoc(doc(db, 'tareas', task.value.id), {
      priority: {
        low: false,
      },
    })
  } else if (!low.value) {
    await updateDoc(doc(db, 'tareas', task.value.id), {
      priority: {
        low: true,
      },
    })
  }
}
async function updateNormal() {
  if (normal.value) {
    await updateDoc(doc(db, 'tareas', task.value.id), {
      priority: {
        normal: false,
      },
    })
  } else if (!normal.value) {
    await updateDoc(doc(db, 'tareas', task.value.id), {
      priority: {
        normal: true,
      },
    })
  }
}
async function updateHigh() {
  if (high.value) {
    await updateDoc(doc(db, 'tareas', task.value.id), {
      priority: {
        high: false,
      },
    })
  } else if (!high.value) {
    await updateDoc(doc(db, 'tareas', task.value.id), {
      priority: {
        high: true,
      },
    })
  }
}
toggleCheck()
</script>

<template>
  <div v-if="isNotDelete" class="container">
    <div>
      <div class="taskName">
        <div class="checkCircle" @click="toggleCheck" :style="{ 'border-color': checkCircleColor }">
          <svg
            v-if="isCheck"
            class="check"
            width="28px"
            height="28px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M7 12L9.89075 14.8907V14.8907C9.95114 14.951 10.049 14.9511 10.1094 14.8907V14.8907L17 8"
                stroke="#00BC8C"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </div>
        <p :style="{ color: checkCircleColor, 'text-decoration': textStyle }">
          {{ task.name }}
        </p>
      </div>
      <div class="taskPriority">
        <p>Prioridad:</p>
        <PriorityButtom @click="updateLow" name="ˇ Low" color="#3293d4" :check="low" />
        <PriorityButtom @click="updateNormal" name=" Normal" color="#375a7f" :check="normal" />
        <PriorityButtom @click="updateHigh" name="ˆ High" color="#e74c3c" :check="high" />
        <p>Añadido hace {{ task.creation }} minutos</p>
      </div>
    </div>
    <div @click="deleteTask" class="delete">
      <div class="circle">
        <div class="rectangle"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  border: solid 2px #3c3b3b;
  border-radius: 0px;
  padding: 1em;
  padding-left: 2em;
  padding-right: 2em;
}
.taskPriority {
  display: flex;
  flex-direction: row;
}

.taskPriority p {
  margin-right: 2vw;
  margin-left: 0.5vw;
  font-size: 0.75em;
}

input {
  margin-right: 2vw;
}

.taskName {
  display: flex;
}

.delete {
  width: 40px;
  height: 40px;

  background-color: red;
  border-radius: 4px;
  display: flex;
  justify-content: center;
}

.circle {
  width: 23px;
  height: 23px;
  position: relative;
  top: 8px;

  display: flex;
  justify-content: center;

  background-color: white;
  border-radius: 50px;
}

.rectangle {
  width: 13px;
  height: 4px;
  background-color: red;
  border-radius: 2px;
  position: relative;
  top: 9px;
}

.check {
  position: relative;
  /* display: none; */
  top: -3px;
  left: -4px;
}

.checkCircle {
  position: relative;
  top: 2.4vh;
  left: 0.23vw;
  width: 1.3em;
  height: 1.3em;
  border: solid 3px white;
  border-radius: 40px;
  margin-right: 1em;
}

.taskPriority p {
  padding: 0px;
}
.taskPriority div {
  text-align: center;
  background-color: #444343;
  margin-right: 0.7em;
  padding: 0.05em;
  border-radius: 4px;
}
</style>
