<script setup>
import Tasks from '../components/Tasks/Tasks.vue'
</script>

<template>
  <div class="todo">

    <Tasks />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .todo {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
