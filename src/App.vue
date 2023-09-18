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

const settings = {
  showWeather: true,
  showGreeting: true,
  showQuote: true,
  showTodos: true,
  showReminders: false,
  showPomodoro: false,
  showNotes: false,
}

</script>

<template>
  <header id="header-content">
    <ThemeButton />
    <SettingsButton />
  </header>

  <main id="main-content"> 
    <div class="flex flex-col gap-2">
      <Suspense>
        <Weather v-show="settings.showWeather" />
      </Suspense>
      <Greeting v-show="settings.showGreeting" class="pb-2"/>
      <Quote v-show="settings.showQuote" />
    </div>
    <div class="flex gap-12">
      <div class="flex flex-col gap-12 w-full">
        <Todos v-show="settings.showTodos" />
        <Reminders v-show="settings.showReminders" />
      </div>
      <div class="flex flex-col gap-6 min-w-fit">
        <Pomodoro v-show="settings.showPomodoro" />
        <Notes v-show="settings.showNotes" />
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
