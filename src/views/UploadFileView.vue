<script setup>
import UploadFile from "../components/UploadFile/UploadHeadersToMatch.vue"
</script>

<template>
  <div class="todo">
    <UploadFile />
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
