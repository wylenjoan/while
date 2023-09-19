import { ref } from 'vue'
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import useDayPart from "@/composables/dayPart"
import DayParts from "@/enums/dayParts"

export const useDateTimeStore = defineStore('datetimeStore', () => {
  const storedDayPart = ref(useStorage('daypart', DayParts.ANYTIME))

  function updateDayPart(hour: number) {
    storedDayPart.value = useDayPart(hour);
  }

  return {
    storedDayPart,
    updateDayPart,
  }
})
