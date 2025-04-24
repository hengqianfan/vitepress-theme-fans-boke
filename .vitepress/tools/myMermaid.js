// 使用安装的依赖 mermaid 
import mermaid from 'mermaid'

// 这个函数是拿给我们自定义的组件调用的：（ mermaid.vue 中调用）
// 将符合 mermaid 语法的代码转化为可视化的流程图
export async function render(id, code) {
    mermaid.initialize({ startOnLoad: false })
    const { svg } = await mermaid.render(id, code)
    return svg
}

// 这个函数是就是我们的插件逻辑 ：（ config.js/ts 中调用）
export default function mermaidPlugin(md) {

    const fence = md.renderer.rules.fence?.bind(md.renderer.rules)

    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const language = token.info.trim()

        // 当代码块语言为 mermaid 时 ，让我们的自定义组件成渲染流程图
        if (language.startsWith('mermaid')) {
            return `<Mermaid id="mermaid-${idx}" code="${encodeURIComponent(token.content)}"></Mermaid>`
        }

        return fence(tokens, idx, options, env, self)
    }
}