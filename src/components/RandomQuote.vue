<script setup lang="ts">
import { onBeforeMount } from "vue"
import { storeToRefs } from "pinia"
import { useNow, useFetch } from "@vueuse/core"
import { useQuoteStore } from "@/stores/QuoteStore"
import quoteApi from "@/apis/quoteApi"
import type { Quote } from "@/types/Quote"

const now = useNow()

const { quote, author, dateFetched } = storeToRefs(useQuoteStore())
const { updateQuoteData } = useQuoteStore()

onBeforeMount(async () => {
  const newDate = now.value.toDateString()
  const oldDate = new Date(dateFetched.value).toDateString()

  if(newDate !== oldDate) {
    const { data } = await useFetch<Quote>(quoteApi).get().json()
    updateQuoteData({...data.value, date: newDate})
  }
})
</script>

<template>
  <p class="text-sm"><span class="italic">{{ quote }}</span> — {{ author }}</p>
</template>

<style scoped>

</style>
