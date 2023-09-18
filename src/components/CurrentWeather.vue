<script setup lang="ts">
import { ref, watch, onBeforeMount } from 'vue'
import { useFetch, useNow } from '@vueuse/core'
import { useUserStore } from "@/stores/UserStore"

const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY
const { location } = useUserStore()
const weatherApi : string = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${location}`

const now = useNow()
const hour = ref(now.value.getHours())

const weatherData = ref()

async function fetchWeather() {
  const { data } = await useFetch(weatherApi)
  weatherData.value = JSON.parse(data.value).current
}

watch(
  () => now.value.getHours(), 
  async (currentHour) => {
    hour.value = currentHour
    await fetchWeather()
  }
)

onBeforeMount(async () => {
  hour.value = now.value.getHours()
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
