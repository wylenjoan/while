import { ref, computed } from 'vue'
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import type { Quote } from "@/types/Quote";

export const useQuoteStore = defineStore('quoteStore', () => {
  const storedQuote = ref(useStorage('quote', ''))
  const quoteData = ref(JSON.parse(storedQuote.value))

  const quote = computed(() =>
    quoteData.value.quote
  )

  const author = computed(() =>
    quoteData.value.author
  )

  const dateFetched = computed(() =>
    quoteData.value.date
  )

  function updateQuoteData(newQuote: Quote) {
    storedQuote.value = JSON.stringify(newQuote);
  }

  return {
    quote,
    author,
    dateFetched,
    updateQuoteData,
  }
})
