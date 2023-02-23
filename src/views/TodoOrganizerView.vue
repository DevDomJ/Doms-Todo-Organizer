<script setup lang="ts">
import TodoList from '../components/TodoList.vue'
</script>

<template>
  <div class="about">
    <h1>This is where it begins</h1>
    <TodoList />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
