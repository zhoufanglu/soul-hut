import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import type { Zoom } from 'medium-zoom'
import { onMounted, watch, nextTick } from 'vue'
import { inBrowser, useRoute, withBase } from 'vitepress'
import DreamVideo from './DreamVideo.vue'
import DreamImage from './DreamImage.vue'
import './custom.css'

declare global {
  interface Window {
    _hmt?: Array<unknown[]>
  }
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DreamVideo', DreamVideo)
    app.component('DreamImage', DreamImage)
  },
  setup() {
    const route = useRoute()
    let zoom: Zoom | undefined

    const initZoom = () => {
      zoom?.detach()
      zoom = mediumZoom('.vp-doc img', {
        background: 'rgba(0, 0, 0, 0.85)'
      })
    }

    const trackPageview = (path: string) => {
      if (!inBrowser) return
      window._hmt = window._hmt || []
      window._hmt.push(['_trackPageview', withBase(path)])
    }

    onMounted(() => {
      initZoom()
      trackPageview(route.path)
    })

    watch(
      () => route.path,
      (path) => {
        nextTick(() => {
          initZoom()
          trackPageview(path)
        })
      }
    )
  }
}
