<template>
  <div class="item-container" :class="{ 'text-gray-400': isChecked}">
    <IconButton 
      class="py-1" 
      @click="handleToggleIsChecked"
    >
      <template #icon>
        <CheckboxMarkedIcon v-if="isChecked" />
        <CheckboxBlankIcon v-else />
      </template>
    </IconButton>
    <div class="w-full h-full overflow-hidden">
      <p 
        v-if="!isEditing"
        class="w-fit p-1 cursor-pointer truncate"
        :class="{ 'line-through': isChecked}" 
        @click="toggleIsEditing" 
      >
        {{ title }}
      </p>
      <input 
        v-else
        type="text"
        class="text-gray-800"
        v-focus
        v-model.trim="newTitle"
        @blur="toggleIsEditing"
        @keyup.enter="handleChangeTitle" 
      >
    </div>
    <IconButton 
      v-if="isEditing"
      class="py-1 text-gray-400 hover:text-red-600" 
      title="Delete to-do item"
      @mousedown.prevent
      @click="handleDeleteItem"
    >
      <template #icon> <DeleteIcon /> </template>
    </IconButton>
  </div>
</template>

<script setup lang="ts">
import CheckboxBlankIcon from "../icons/IconCheckboxBlank.vue"
import CheckboxMarkedIcon from "../icons/IconCheckboxMarked.vue"
import DeleteIcon from "../icons/IconDelete.vue"
import IconButton from "../buttons/ButtonIcon.vue"
import { ref, } from "vue";

interface Props {
  isChecked: boolean
  title: string
}

const props = defineProps<Props>()
const emit = defineEmits(['toggleIsChecked', 'changeTitle', 'deleteItem'])

const isEditing = ref(false)
const newTitle = ref(props.title)

function toggleIsEditing() {
  isEditing.value = !isEditing.value
  console.log('toggle');
}

function handleToggleIsChecked() {
  emit('toggleIsChecked')
}

function handleChangeTitle() {
  emit('changeTitle', newTitle.value)
  toggleIsEditing()
}

function handleDeleteItem() {
  emit('deleteItem')
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
