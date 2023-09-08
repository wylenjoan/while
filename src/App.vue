<script setup lang="ts">
import ThemeButton from "./components/theme/ThemeButton.vue"
import SettingsButton from "./components/settings/SettingsButton.vue"
import Weather from "./components/CurrentWeather.vue"
import Greeting from "./components/RandomGreeting.vue"
import Quote from "./components/RandomQuote.vue"
import Todos from "./components/todo/TodoList.vue"
import Reminders from "./components/reminder/ReminderList.vue"
import Pomodoro from "./components/pomodoro/PomodoroGroup.vue"
import Notes from "./components/notes/NotesGroup.vue"
</script>

<template>
  <header id="header-content">
    <ThemeButton />
    <SettingsButton />
  </header>

  <main id="main-content"> 
    <div class="flex flex-col gap-4">
      <Weather />
      <Greeting />
      <Quote />
    </div>
    <div class="flex gap-12">
      <div class="flex flex-col gap-12 w-full">
        <Todos />
        <Reminders />
      </div>
      <div class="flex flex-col gap-6 min-w-fit">
        <Pomodoro />
        <Notes />
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
