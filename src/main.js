import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'

import { initializeApp } from 'firebase/app'
import { VueFire, VueFireAuth } from 'vuefire'
// the file we created above with `database`, `firestore` and other exports

const firebaseConfig = {
  apiKey: 'AIzaSyCWbma-eg2sxvk8ddrluGgIrn8AQX3e57U',

  authDomain: 'todo-list-96f91.firebaseapp.com',

  projectId: 'todo-list-96f91',

  storageBucket: 'todo-list-96f91.firebasestorage.app',

  messagingSenderId: '34265197623',

  appId: '1:34265197623:web:56b06d0d4245cd6bd9a3b2',
}

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig)

// app.mount('#app')
const app = createApp(App)
app.use(VueFire, {
  firebaseApp,
  modules: [],
})

app.mount('#app')
