import { App } from 'vue'

export default (app: App) => {
  register(app, import.meta.glob('./**/index.ts', { eager: true, import: 'default' }))
}

function register(app: App, modules: Record<string, any>) {
  Object.entries(modules).map(([, module]) => {
    module(app)
  })
}
