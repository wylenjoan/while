import { ref, computed } from 'vue'
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import useGreetingByTime from "@/composables/greetingByTime"
import { useUserStore } from "./UserStore"

export const useGreetingStore = defineStore('greetingStore', () => {
  const { name } = useUserStore()

  const greeting = ref(useStorage('greeting', 'Hello'))

  const greetingWithName = computed(() =>
    `${greeting.value}, ${name}!`
  )

  function updateGreeting(daypart: string) {
    greeting.value = useGreetingByTime(daypart);
  }

  return {
    greeting,
    greetingWithName,
    updateGreeting,
  }
})
