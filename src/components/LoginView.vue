<script setup>
import { ref } from 'vue'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth'

const isLog = ref(true)
const emailUser = ref()
const passwordUser = ref()
const auth = getAuth()
const provider = new GoogleAuthProvider()
const emit = defineEmits(['boton-clicado'])
function logWithGithub() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result)
      const token = credential.accessToken

      // The signed-in user info.
      const user = result.user
      emit('boton-clicado', { isLog: false })

      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.customData.email
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error)
      console.log(errorMessage)
      // ...
    })
}
function LogWithEmail() {
  console.log('email', emailUser.value)
  const email = emailUser.value
  const password = passwordUser.value

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user
      emit('boton-clicado', { isLog: false })
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorMessage)
      // ..
    })
}
function logWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      // The signed-in user info.
      const user = result.user
      console.log(user)
      emit('boton-clicado', { isLog: false })
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.customData.email
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
      console.log(errorMessage)
      // ...
    })
}
</script>

<template>
  <div>
    <h1>login</h1>
    <p>correo</p>
    <input v-model="emailUser" type="text" />
    <p>contraseña</p>
    <input v-model="passwordUser" type="password" />
    <br />
    <button v-if="isLog" @click="LogWithEmail">Log in</button>
    <button v-if="isLog" @click="logWithGoogle">Google Account</button>
    <button v-if="isLog" @click="logWithGithub">Github</button>
  </div>
</template>

<style scoped></style>
