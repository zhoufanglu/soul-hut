import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/soul-hut/',
  title: 'Soul Hut',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '瑶同学', link: '/瑶同学/一些碎碎念' }
    ],

    sidebar: [
      {
        text: '瑶同学',
        items: [
          { text: '一些碎碎念(想你就更新～)', link: '/瑶同学/一些碎碎念' },
          { text: 'The girl of my dreams', link: '/瑶同学/The-girl-of-my-dreams' },
          { text: '第一次见面', link: '/瑶同学/第一次见面' },
          { text: '第二次见面', link: '/瑶同学/第二次见面' },
          { text: '第一次给她的信', link: '/瑶同学/第一次给她的信' },
          { text: '瑶同学和小吴同学', link: '/瑶同学/瑶同学和小吴同学' }
        ]
      }
    ],

    socialLinks: []
  }
})
