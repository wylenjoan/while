<template>
  <div class="list-container">
    <p class="font-semibold">You have 1 reminder:</p>
    <ReminderItem 
        v-for="{id, isDone, label} in reminders" 
        :key="id"
        :is-done="isDone" 
        :label="label" 
      />
    <AddItemButton label="Add new reminder"/>
  </div>
</template>

<script setup lang="ts">
import ReminderItem from "./ReminderItem.vue"
import AddItemButton from "../buttons/ButtonAddItem.vue"

import { ref } from "vue"

const reminders = ref([
  {
    id: 1,
    isDone: false,
    label: "Log out from work @ Today 6:30 PM",
  },
  {
    id: 2,
    isDone: true,
    label: "Lunch break @ Today 12:00 PM",
  },
])
</script>

<style scoped>

</style>
