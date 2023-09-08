<template>
  <div class="item-container" :class="{ 'text-gray-400': isDone}">
    <IconButton>
      <template #icon>
        <CheckboxMarkedIcon v-if="isDone" />
        <CheckboxBlankIcon v-else />
      </template>
    </IconButton>
    <p :class="{ 'line-through': isDone}">
      {{ label }}
    </p>
  </div>
</template>

<script setup lang="ts">
import CheckboxBlankIcon from "../icons/IconCheckboxBlank.vue"
import CheckboxMarkedIcon from "../icons/IconCheckboxMarked.vue"
import IconButton from "../buttons/ButtonIcon.vue"

interface Props {
  isDone: boolean
  label: string
}

const props = defineProps<Props>()
const { isDone, label } = props
</script>

<style scoped>

</style>
