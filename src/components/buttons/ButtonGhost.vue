<template>
  <button 
    :title="label"
    class="item-container text-gray-400 hover:bg-gray-200 hover:text-gray-500" 
    @click="buttonClick"
    >
    <slot name="icon"></slot>
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  label: string
}

const props = defineProps<Props>()
const { label } = props

const emit = defineEmits(['click'])

function buttonClick() {
  emit('click')
}
</script>

<style scoped>
  button {
    width: fit-content;
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border-radius: 0.24rem;
  }
</style>
