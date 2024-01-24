<script setup>
import { useStore } from "../../stores/tasks"
import TaskItem from "./TaskItem.vue"
import ToolingIcon from "../icons/IconTooling.vue"
import TaskInput from "./TaskInput.vue"

const store = useStore()
const tasks = store.taskList
</script>

<template>
  <main>
    <header>To Do Tasks</header>
    <div class="container">
      <div class="tasks-list">
        <ul>
          <li>
            <TaskItem
              v-for="item in tasks"
              :key="item.id"
              :title="item.title"
              :deadline="item.deadline"
              :detail="item.detail"
              :priority="item.priority"
            >
              <template #icon>
                <ToolingIcon />
              </template>
            </TaskItem>
          </li>
        </ul>
      </div>
      <div class="tasks-input">
        <li>
          <TaskInput />
        </li>
      </div>
    </div>
  </main>
</template>

<style scoped>
li {
  list-style-type: none;
}
header {
  font-size: 2rem;
  text-align: center;
  padding: 10px;
}
main {
  height: 100vh;
  width: 100vw;
}
.container {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
.tasks-list {
  margin: 1em;
}

.tasks-input {
  margin: 1em;
}
</style>
