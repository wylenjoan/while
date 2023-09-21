<template>
  <div class="list-container">
    <p class="font-semibold">
      You have {{ todoAmount }} to do:
    </p>
      <TodoItem 
        v-for="({ is_checked, title }, index) in todoList" 
        :key="index"
        :is-checked="is_checked" 
        :title="title" 
        @toggle-is-checked="updateTodoCheck(index)"
        @change-title="(newTitle: string) => updateTodoTitle(index, newTitle)"
        @delete-item="removeTodo(index)"
      />
      <TodoAdd @add-new-todo="(newTitle: string) => addTodo(newTitle)" />
  </div>
</template>

<script setup lang="ts">
import TodoItem from "./TodoItem.vue"
import TodoAdd from "./TodoAdd.vue"

import { computed } from "vue"
import { storeToRefs } from "pinia"
import { useTodoStore } from "@/stores/TodoStore"

const { todoList } = storeToRefs(useTodoStore())
const {
  addTodo,
  removeTodo,
  updateTodoTitle,
  updateTodoCheck,
} = useTodoStore()

const todoAmount = computed(() => {
  const length = todoList.value.length
  if (length < 1) {
    return "nothing"
  } 
  if (length === 1) {
    return "1 thing"
  }
  return `${length} things`
})

</script>

<style scoped>

</style>
