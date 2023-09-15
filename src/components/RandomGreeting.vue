<script setup lang="ts">
import { ref, watch, onBeforeMount } from 'vue'
import { useNow } from "@vueuse/core"
import { useGreetingStore } from "@/stores/GreetingStore"
import useDayPart from "@/composables/dayPart"

const {
  currentDayPart, 
  greetingWithName, 
  updateCurrentDayPart, 
  updateGreeting,
} = useGreetingStore()

const now = useNow()
const hour = ref(now.value.getHours())

function updateGreetingStore() {
  if (currentDayPart !== useDayPart(hour.value)) {
    updateCurrentDayPart(hour.value)
    updateGreeting()
  }
}

watch(
  () => now.value.getHours(), 
  (currentHour) => {
    hour.value = currentHour
    updateGreetingStore()
  }
)

onBeforeMount(() => {
  hour.value = now.value.getHours()
  updateGreetingStore()
})
</script>

<template>
  <h1 class="text-4xl font-semibold">{{ greetingWithName }}</h1>  
</template>

<style scoped>

</style>
