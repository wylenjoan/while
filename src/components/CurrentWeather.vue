<script setup lang="ts">
import { ref, watch, onBeforeMount } from "vue"
import { useFetch, useNow } from "@vueuse/core"
import weatherApi from "@/apis/weatherApi"
import type { Weather } from "@/types/Weather"

const now = useNow()
const weatherData = ref()

async function fetchWeather() {
  const { data } = await useFetch<Weather>(weatherApi).get().json()
  weatherData.value = data.value.current
}

watch(
  () => now.value.getHours(), 
  async () => {
    await fetchWeather()
  }
)

onBeforeMount(async () => {
  await fetchWeather()
})
</script>

<template>
  <div v-if="weatherData" class="flex items-center gap-2">
    <img :src="`https:${weatherData.condition.icon}`" alt="weather icon" class="h-12">
    <h3 class="text-2xl"> {{ weatherData.temp_c }}°C - {{ weatherData.condition.text }}</h3>
  </div>
</template>

<style scoped>

</style>
