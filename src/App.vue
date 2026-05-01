<script setup>
import { ref } from 'vue'
import TaskView from './components/TaskView.vue'
import LoginView from './components/LoginView.vue'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth()
const currentComponent = ref(LoginView)
const isVisible = ref(true)
const manejarClic = (datos) => {
  isVisible.value = datos.isLog
  currentComponent.value = TaskView
}

function logOutGithub() {
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
      console.log(error)
    })
}
function logOutGoogle() {
  signOut(auth)
    .then(() => {
      console.log('se ha cerrado sesion')
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    })
}
function logOutEmail() {
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
      console.log(error)
    })
}
function logOut() {
  logOutEmail()
  logOutEmail()
  logOutGithub()
  currentComponent.value = LoginView
}
</script>

<template>
  <main>
    <div>
      <component :is="currentComponent" @boton-clicado="manejarClic"></component>
      <button @click="logOut">Log Out</button>
    </div>
  </main>
</template>

<style scoped></style>
