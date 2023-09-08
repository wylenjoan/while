<template>
  <button 
    type="button" 
    class="flex gap-2 px-2 py-1 border border-gray-800 rounded-lg" 
    :title="title"
  >
    <slot name="icon"></slot>
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  label: string
}

const props = defineProps<Props>()

const { title, label } = props
</script>

<style scoped>

</style>
