import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "todo",
      component: () => import("../views/ToDoView.vue")
    },
    {
      path: "/column",
      name: "column",
      component: () => import("../views/ColumnMatchingView.vue")
    }
  ]
})

export default router
