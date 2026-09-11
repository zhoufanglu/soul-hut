<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{
  src: string
  alt?: string
}>()
</script>

<template>
  <img
    class="dream-image"
    :src="withBase(src)"
    :alt="alt || ''"
    loading="lazy"
  />
</template>

<style scoped>
.dream-image {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1rem 0;
}
</style>
