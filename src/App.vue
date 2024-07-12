<script setup>
import { RouterLink, RouterView } from "vue-router"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
</script>

<template>
  <header>
    <div class="logo">
      <font-awesome-icon :icon="['fas', 'list']" />
    </div>

    <nav class="navbar">
      <RouterLink to="/">To Do List</RouterLink>
    </nav>
    <nav class="navbar">
      <RouterLink to="/column">AI Column Matching</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  background: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  position: sticky;
  top: 0;
}

.logo {
  display: flex;
  align-items: center;
}

.navbar {
  display: flex;
}

.navbar a {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
}

.navbar a.router-link-exact-active,
.navbar a:hover {
  color: #007bff;
}

main {
  width: 100%;
  justify-content: center;
  display: flex;
}

@media (max-width: 768px) {
  .navbar {
    display: block;
    text-align: center;
  }

  .navbar a {
    display: block;
    margin: 0.5rem 0;
  }
}
</style>
