import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Soul Hut',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '瑶老师', link: '/瑶老师/第一次见面' }
    ],

    sidebar: [
      {
        text: '瑶老师',
        items: [
          { text: '第一次见面', link: '/瑶老师/第一次见面' },
          { text: '第二次见面', link: '/瑶老师/第二次见面' },
          { text: '第一次给她的信', link: '/瑶老师/第一次给她的信' },
          { text: '想她的碎碎念', link: '/瑶老师/想她的碎碎念' }
        ]
      }
    ],

    socialLinks: []
  }
})
