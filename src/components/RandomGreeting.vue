<script setup lang="ts">
import { watch, onBeforeMount } from "vue"
import { storeToRefs } from "pinia"
import { useNow } from "@vueuse/core"
import { useGreetingStore } from "@/stores/GreetingStore"
import { useDateTimeStore } from "@/stores/DateTimeStore"
import useDayPart from "@/composables/dayPart"

const now = useNow()

const { storedDayPart } = storeToRefs(useDateTimeStore())
const { greetingWithName } = storeToRefs(useGreetingStore())

const { updateDayPart } = useDateTimeStore()
const { updateGreeting } = useGreetingStore()

watch(
  () => now.value.getHours(), 
  (hour) => {
    if (storedDayPart.value !== useDayPart(hour)) {
      updateDayPart(hour)
      updateGreeting()
    }
  }
)

onBeforeMount(() => {
  updateDayPart(now.value.getHours())
  updateGreeting()
})
</script>

<template>
  <h1 class="text-4xl font-semibold">{{ greetingWithName }}</h1>  
</template>

<style scoped>

</style>
