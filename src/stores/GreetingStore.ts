import { ref, computed } from 'vue'
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import useGreetingByTime from "@/composables/greetingByTime"
import { useUserStore } from "./UserStore"
import { useDateTimeStore } from "./DateTimeStore"

export const useGreetingStore = defineStore('greetingStore', () => {
  const { name } = useUserStore()
  const { storedDayPart } = useDateTimeStore()

  const greeting = ref(useStorage('greeting', 'Hello'))

  const greetingWithName = computed(() =>
    `${greeting.value}, ${name}!`
  )

  function updateGreeting() {
    greeting.value = useGreetingByTime(storedDayPart);
  }

  return {
    greeting,
    greetingWithName,
    updateGreeting,
  }
})
