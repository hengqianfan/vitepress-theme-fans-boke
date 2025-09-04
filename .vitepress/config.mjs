import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import xdata from '../data/main.json'
import mermaidPlugin from './tools/myMermaid'
import { setAllSidebars } from './tools/setSidebar'

export default defineConfig({
  title: xdata.SiteName,
  description: "衡千帆的世界",
  base: xdata.base,
  outDir: './.vitepress/dist',
  // 标签页的LOGO
  head: [
    ['link', { rel: 'icon', href: './icon/logo.png' }]
  ],
  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: setAllSidebars(xdata.SidebarDirectory),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  markdown: {
    headers: {
      level: [2, 3, 4] // 提取 h2、h3、h4（可选配置）
    },
    config(md) {

      md.use(groupIconMdPlugin),
        md.use(mermaidPlugin)
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern', // 或 'modern-compiler':cite[5]:cite[8]
          // 如果需要临时屏蔽警告，可同时添加下行
          // silenceDeprecations: ['legacy-js-api'], :cite[10]
        },
      },
    },
    plugins: [
      groupIconVitePlugin()
    ],
  }
})
