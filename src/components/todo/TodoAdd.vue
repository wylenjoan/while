<template>
  <div class="item-container">
    <IconButton class="py-1 text-gray-400">
      <template #icon>
        <AddIcon />
      </template>
    </IconButton>
    <div class="w-full h-full">
      <p 
        v-if="!isEditing"
        class="w-full h-full p-1 text-gray-400 cursor-pointer"
        @click="toggleIsEditing" 
      >
      Add new to-do
      </p>
      <input 
        v-else
        type="text"
        id="add-new-todo-input"
        placeholder="Add new to-do"
        v-focus
        v-model.trim="newTitle"
        @blur="toggleIsEditing" 
        @keyup.enter="handleAddTodo" 
      >
    </div>
    
  </div>
</template>

<script setup lang="ts">
import AddIcon from "../icons/IconAdd.vue"
import IconButton from "../buttons/ButtonIcon.vue"
import { ref } from "vue";

const emit = defineEmits(['addNewTodo'])

const isEditing = ref(false)
const newTitle = ref("")

function toggleIsEditing() {
  isEditing.value = !isEditing.value
}

function handleAddTodo() {
  toggleIsEditing()
  emit('addNewTodo', newTitle.value)
  newTitle.value = ""
  const textField = document.getElementById("add-new-todo-input")
  textField?.focus()
}
</script>

<style scoped>
input {
  width: 100%;
  background: none;
  padding: 0.25rem;
  border: solid gray 0.5px;
  border-radius: 0.25rem;
}
input:focus {
  outline: none;
}
</style>
