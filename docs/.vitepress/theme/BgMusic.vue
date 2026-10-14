<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { inBrowser, withBase } from 'vitepress'

const KEY = 'soul-bgm'
const playing = ref(false)
let audio: HTMLAudioElement | null = null
let userPaused = false

const unlockEvents = ['pointerdown', 'touchstart', 'keydown', 'wheel'] as const

function play() {
  if (!audio || userPaused) return
  audio
    .play()
    .then(() => {
      playing.value = true
      localStorage.setItem(KEY, 'on')
      removeUnlock()
    })
    .catch(() => {
      playing.value = false
    })
}

function unlock() {
  if (audio?.paused && !userPaused) play()
}

function addUnlock() {
  for (const event of unlockEvents) {
    window.addEventListener(event, unlock, { passive: true })
  }
}

function removeUnlock() {
  for (const event of unlockEvents) {
    window.removeEventListener(event, unlock)
  }
}

function toggle() {
  if (!audio) return
  if (audio.paused) {
    userPaused = false
    play()
  } else {
    userPaused = true
    audio.pause()
    playing.value = false
    localStorage.setItem(KEY, 'off')
  }
}

onMounted(() => {
  if (!inBrowser) return

  userPaused = localStorage.getItem(KEY) === 'off'

  const saved = (window as Window & { __soulBgm?: HTMLAudioElement }).__soulBgm
  if (saved) {
    audio = saved
    playing.value = !audio.paused
  } else {
    audio = new Audio(withBase('/music/tracks.mp3'))
    audio.loop = true
    audio.volume = 0.7
    ;(window as Window & { __soulBgm?: HTMLAudioElement }).__soulBgm = audio
  }

  if (!userPaused) {
    play()
    addUnlock()
  }
})

onUnmounted(() => {
  removeUnlock()
})
</script>

<template>
  <button class="bgm-btn" type="button" @click.stop="toggle">
    {{ playing ? '暂停' : '播放' }}
  </button>
</template>

<style>
.bgm-btn {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 400;
  border: 0;
  border-radius: 999px;
  padding: 0.45rem 0.9rem;
  background: rgba(20, 28, 48, 0.72);
  color: #fff;
  font-size: 13px;
  cursor: pointer;
}
</style>
