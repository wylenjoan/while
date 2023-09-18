import { ref } from 'vue'
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useUserStore = defineStore('userStore', () => {
  const name = ref(useStorage('name', ''))
  const location = ref(useStorage('location', ''))

  function updateName(newName: string) {
    name.value = newName;
  }

  function updateLocation(newLocation: string) {
    location.value = newLocation;
  }

  return {
    name,
    location,
    updateName,
    updateLocation,
  }
})
