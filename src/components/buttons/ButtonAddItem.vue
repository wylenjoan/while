<template>
  <div class="item-container text-gray-400">
    <button type="button"><AddIcon /></button>
    <p>{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
import AddIcon from "../icons/IconAdd.vue"

interface Props {
  label: string
}

const props = defineProps<Props>()

const { label } = props
</script>

<style scoped>

</style>
