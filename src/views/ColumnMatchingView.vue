<script setup>
import ColumnMatching from "../components/CoulmnMatching/ColumnMatching.vue"
</script>

<template>
  <div class="todo">
    <ColumnMatching />
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
