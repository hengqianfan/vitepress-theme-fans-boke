import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { onMounted, watch, nextTick } from 'vue'


import toc from './components/Toc/index.vue'

import Mermaid from './components/Mermaid/index.vue'


import mediumZoom from 'medium-zoom'


import './scss/index.scss'

import layout from './layout.vue'

// 代码组图标扩展
import 'virtual:group-icons.css'

// pinia
import { createPinia } from 'pinia'


export default {
  extends: DefaultTheme,
  // medium-zoom 的配置
  setup() {
    const route = useRoute()
    const initZoom = () => {
      //mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
      // mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
      mediumZoom('.vp-doc img', { background: 'var(--vp-c-bg)' })

    };
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },

  Layout: layout,

  enhanceApp({ app, router, siteData }) {

    app.component("toc", toc)
    app.component('Mermaid', Mermaid)


    // pinia
    const pinia = createPinia()
    // 配置持久化插件
    // pinia.use(createPersistedState({
    //   auto: true, // 自动持久化所有 store
    //   storage: {
    //     getItem: (key) => process.client ? localStorage.getItem(key) : null,
    //     setItem: (key, value) => process.client && localStorage.setItem(key, value),
    //     removeItem: (key) => process.client && localStorage.removeItem(key)
    //   }
    // }))
    app.use(pinia)


  }



}
