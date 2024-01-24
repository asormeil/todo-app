<script setup>
import { ref, computed } from "vue"
import { useStore } from "../../stores/tasks"

const store = useStore()
const formData = ref({
  title: "",
  deadline: new Date().toLocaleDateString(),
  detail: "",
  priority: "normal",
  priorityColor: "#E5E1DA"
})

const priorityColor = computed(() => {
  return formData.value.priority === "high"
    ? "#D04848"
    : formData.value.priority === "normal"
      ? "#E5E1DA"
      : formData.value.priority === "low"
        ? "#96E9C6"
        : "#E5E1DA"
})

const handleSubmit = () => {
  store.addTasks(formData.value)
}
</script>

<template>
  <form class="container" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="title">Title</label>
      <input required min="3" type="text" name="title" v-model="formData.title" />
    </div>
    <div class="form-group">
      <label for="deadline">Deadline</label>
      <VueDatePicker v-model="formData.deadline"></VueDatePicker>
    </div>
    <div class="form-group">
      <label for="priority">Priority</label>
      <select :style="{ backgroundColor: priorityColor }" v-model="formData.priority">
        <option value="high">High</option>
        <option value="normal">Normal</option>
        <option value="low">Low</option>
      </select>
    </div>
    <div class="form-group">
      <label for="detail">Details</label>
      <textarea name="detail" v-model="formData.detail"></textarea>
    </div>
    <button type="submit">Add Task</button>
  </form>
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

.form-group {
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group label {
  margin-bottom: 5px;
  font-size: 1.1em;
  color: #2c3e50;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
}

select {
  padding: 5px;
  text-align: center;
}
textarea {
  resize: vertical;
  min-height: 100px;
}

button {
  border: none;
  background-color: #2c3e50;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #34495e;
}
</style>
