<script setup>
import { defineProps } from "vue"

const props = defineProps({
  title: String,
  deadline: String,
  detail: String,
  priority: String
})
</script>

<template>
  <div class="container">
    <div class="header">
      <h3 class="title">
        <div>
          <font-awesome-icon :icon="['fas', 'exclamation']" />
        </div>
        {{ priority }}
        <font-awesome-icon :icon="['fas', 'marker']" />

        <span name="heading">
          {{ title }}
        </span>
      </h3>
      <span class="deadline">
        {{ deadline }}
      </span>
    </div>
    <div class="details">
      {{ detail }}
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 5px auto;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  width: 100%;
}

.title {
  font-size: 1.2em;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.deadline {
  font-size: 0.8em;
  background-color: #f2f2f2;
  border-radius: 12px;
  padding: 0.4em 0.8em;
  color: #e74c3c;
}

.details {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1em;
  border-top: 1px solid #eee;
  padding: 1em;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>
