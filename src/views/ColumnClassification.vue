<script setup>
import ColumnClassification from "../components/ColumnClassification/ColumnClassification.vue"
</script>

<template>
  <div class="todo">
    <ColumnClassification />
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
