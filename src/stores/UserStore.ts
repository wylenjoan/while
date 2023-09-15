import { ref } from 'vue'
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useUserStore = defineStore('userStore', () => {
  const name = ref(useStorage('name', ''))

  function updateName(newName: string) {
    name.value = newName;
  }

  return { name, updateName }
})
