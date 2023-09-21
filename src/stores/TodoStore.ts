import { ref } from 'vue'
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import type { Todo } from "@/types/Todo";

export const useTodoStore = defineStore('todoStore', () => {
  const storedTodos = ref(useStorage('todos', '[]'))
  const todoList = ref<Todo[]>(JSON.parse(storedTodos.value))

  function addTodo(title: string) {
    todoList.value.push({
      is_checked: false,
      title: title,
    })
    storedTodos.value = JSON.stringify(todoList.value)
  }

  function removeTodo(index: number) {
    todoList.value.splice(index, 1)
    storedTodos.value = JSON.stringify(todoList.value)
  }

  function updateTodoTitle(index: number, newTitle: string) {
    todoList.value[index].title = newTitle
    storedTodos.value = JSON.stringify(todoList.value)
  }

  function updateTodoCheck(index: number) {
    todoList.value[index].is_checked = !todoList.value[index].is_checked
    storedTodos.value = JSON.stringify(todoList.value)
  }

  function updateTodoList(newTodoList: Todo[]) {
    todoList.value = newTodoList
    storedTodos.value = JSON.stringify(todoList.value)
  }

  return {
    todoList,
    addTodo,
    removeTodo,
    updateTodoTitle,
    updateTodoCheck,
    updateTodoList,
  }
})
