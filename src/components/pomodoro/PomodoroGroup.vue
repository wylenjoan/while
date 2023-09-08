<template>
  <div class="flex flex-col gap-4 p-6 items-center border border-gray-800 rounded-lg">
    <div class="flex gap-4 text-sm">
      <button type="button" class="font-semibold">Pomodoro</button>
      <button type="button" class="text-gray-400">Short break</button>
      <button type="button" class="text-gray-400">Long break</button>
    </div>
    <div class="text-5xl font-semibold">25:00</div>
    <div class="flex gap-4">
      <IconButton>
        <template #icon><RestartIcon/></template>
      </IconButton>
      <OutlinedButton label="Start">
        <template #icon><PlayIcon/></template>
      </OutlinedButton>
      <IconButton>
        <template #icon><PauseIcon/></template>
      </IconButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import RestartIcon from "../icons/IconRestart.vue"
import PlayIcon from "../icons/IconPlay.vue"
import PauseIcon from "../icons/IconPause.vue"
import IconButton from "../buttons/ButtonIcon.vue"
import OutlinedButton from "../buttons/ButtonOutlined.vue"

</script>

<style scoped>

</style>
