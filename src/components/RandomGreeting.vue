<script setup lang="ts">
import useGreetingByTime from "../composables/greetingByTime"

const name = "Wylen"
const greeting = useGreetingByTime(name)
</script>

<template>
  <h1 class="text-4xl font-semibold">{{ greeting }}</h1>
</template>

<style scoped>

</style>
