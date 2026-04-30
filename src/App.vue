<script setup>
import { ref } from 'vue'
import TaskView from './components/TaskView.vue'
import LoginView from './components/LoginView.vue'
const currentComponent = ref(LoginView)
const isVisible = ref(true)
function changeView() {
  isVisible.value = false
  currentComponent.value = TaskView
}
</script>

<template>
  <main>
    <div>
      <component :is="currentComponent"></component>
      <button v-if="isVisible" @click="changeView" class="loginButton">boton</button>
    </div>
  </main>
</template>

<style scoped></style>
