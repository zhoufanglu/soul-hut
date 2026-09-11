<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{
  src: string
}>()
</script>

<template>
  <video
    class="dream-video"
    :src="withBase(src)"
    controls
    playsinline
    loop
  />
</template>

<style scoped>
.dream-video {
  display: block;
  max-width: 100%;
  border-radius: 8px;
  margin: 1rem 0;
}
</style>
