import { defineStore } from "pinia"

export const useStore = defineStore("tasks", {
  state: () => ({
    taskList: [
      {
        title: "The title",
        detail: "Detals of this task will go in here",
        deadline: "2023-01-17",
        priority: "normal",
        priorityColor: "#E5E1DA"
      }
    ]
  }),
  actions: {
    addTasks(newTask) {
      this.taskList.push(newTask)
    },
    removeTask(removeTask) {
      this.taskList.remove((item) => {
        item.id == removeTask.id
      })
    }
  }
})
