<template>
  <div class="list-container">
    <p class="font-semibold">You have 3 things to do:</p>
      <TodoItem 
        v-for="{id, isDone, label} in todos" 
        :key="id"
        :is-done="isDone" 
        :label="label" 
      />
      <AddItemButton label="Add new to-do"/>
  </div>
</template>

<script setup lang="ts">
import TodoItem from "./TodoItem.vue"
import AddItemButton from "../buttons/ButtonAddItem.vue"

import { ref } from "vue"

const todos = ref([
  {
    id: 1,
    isDone: false,
    label: "Work on new task in client project",
  },
  {
    id: 2,
    isDone: false,
    label: "Finish studying Vue 3",
  },
  {
    id: 3,
    isDone: false,
    label: "Check pending pull requests",
  },
  {
    id: 4,
    isDone: true,
    label: "Work on new task",
  },
])
</script>

<style scoped>

</style>
