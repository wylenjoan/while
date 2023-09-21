<template>
  <button type="button" :title="title" @click="buttonClick">
    <slot name="icon"></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}

const props = defineProps<Props>()
const { title } = props

const emit = defineEmits(['click'])

function buttonClick() {
  emit('click')
}
</script>

<style scoped>

</style>
