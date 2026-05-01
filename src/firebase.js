import { initializeApp } from 'firebase/app'
import { getDatabase, ref as dbRef } from 'firebase/database'
// ... other firebase imports

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCWbma-eg2sxvk8ddrluGgIrn8AQX3e57U',

  authDomain: 'todo-list-96f91.firebaseapp.com',

  projectId: 'todo-list-96f91',

  storageBucket: 'todo-list-96f91.firebasestorage.app',

  messagingSenderId: '34265197623',

  appId: '1:34265197623:web:b3b9fd2a2a60e6ddd9a3b2',
})

// used for the databas refs
const db = getDatabase(firebaseApp)

// here we can export reusable database references
export const todosRef = dbRef(db, 'tareas')
