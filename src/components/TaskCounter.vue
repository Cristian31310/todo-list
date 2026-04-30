<script setup>
//añadir icono
import {ref} from 'vue'
import Task from './Task.vue'
const totalTask = ref(4);
const restTask = ref(2);
</script>

<template>
  <div>
    <p>{{restTask}} pendientes de un total de {{totalTask}} | </p>
    <p class= "erase"> x Borrar tareas completadas</p>
  </div>
</template>

<style scoped>
  div{
    display:flex;
    flex-direction: row;
  }

  .erase{
    color: #EB8E19;
  }
</style>
