import { ref, computed } from 'vue'
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { useUserStore } from "./UserStore"
import useGreetingByTime from "@/composables/greetingByTime"
import useDayPart from "@/composables/dayPart"
import DayParts from "@/enums/dayParts"

export const useGreetingStore = defineStore('greetingStore', () => {
  const { name } = useUserStore()

  const currentDayPart = ref(useStorage('daypart', DayParts.ANYTIME))
  const greeting = ref(useStorage('greeting', 'Hello'))

  const greetingWithName = computed(() =>
    `${greeting.value}, ${name}!`
  )

  function updateCurrentDayPart(hour: number) {
    currentDayPart.value = useDayPart(hour);
  }

  function updateGreeting() {
    greeting.value = useGreetingByTime(currentDayPart.value);
  }

  return {
    greeting,
    currentDayPart,
    greetingWithName,
    updateGreeting,
    updateCurrentDayPart,
  }
})
