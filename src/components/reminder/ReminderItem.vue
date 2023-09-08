<template>
  <div class="item-container" :class="{ 'text-gray-400': isDone}">
    <IconButton>
      <template #icon>
        <ReminderOffIcon v-if="isDone" />
        <ReminderIcon v-else />
      </template>
    </IconButton>
    <p :class="{ 'line-through': isDone}">
      {{ label }}
    </p>
  </div>
</template>

<script setup lang="ts">
import ReminderIcon from "../icons/IconReminder.vue"
import ReminderOffIcon from "../icons/IconReminderOff.vue"
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
