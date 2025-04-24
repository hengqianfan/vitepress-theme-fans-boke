import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import xdata from '../data/main.json'
import mermaidPlugin from './tools/myMermaid'

export default defineConfig({
  title: "ZONOTES",
  description: "衡千帆的世界",
  base: xdata.base,
  outDir: './.vitepress/dist',
  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },

    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/' },
          { text: 'Runtime API Examples', link: '/' }
        ]
      }
    ],

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
    plugins: [
      groupIconVitePlugin()
    ],
  }
})
