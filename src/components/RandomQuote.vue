<script setup lang="ts">
import { onBeforeMount, ref } from "vue"
import { storeToRefs } from "pinia"
import { useNow, useFetch } from "@vueuse/core"
import { useQuoteStore } from "@/stores/QuoteStore"
import quoteApi from "@/apis/quoteApi"
import type { Quote } from "@/types/Quote"

const now = useNow()

const quoteStore = useQuoteStore()
const { quote, author, dateFetched } = storeToRefs(quoteStore)
const { updateQuoteData } = quoteStore
const quoteData = ref({
  quote,
  author,
  date: dateFetched
})

async function updateQuote() {
  const newDate = now.value.toDateString()
  const oldDate = new Date(dateFetched.value).toDateString()

  if (newDate !== oldDate || !oldDate) {
    const { data } = await useFetch<Quote>(quoteApi).get().json()
    updateQuoteData({...data.value, date: newDate})
    quoteData.value = {...data.value, date: newDate}
  }
}
onBeforeMount(async () => {
  await updateQuote()
})
</script>

<template>
  <p v-if="quoteData" class="text-sm">
    <span class="italic">{{ quoteData.quote }}</span> — {{ quoteData.author }}
  </p>
</template>

<style scoped>

</style>
