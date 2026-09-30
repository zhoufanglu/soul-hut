import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/soul-hut/',
  title: 'Soul Hut',
  description: 'A VitePress Site',
  head: [
    [
      'script',
      {},
      `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?a2ac393cc8d512c9cb6b53eefc860dd1";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
      `.trim()
    ]
  ],
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
