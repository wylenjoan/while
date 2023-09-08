<template>
  <button type="button" :title="title">
    <slot name="icon"></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}

const props = defineProps<Props>()

const { title } = props
</script>

<style scoped>

</style>
