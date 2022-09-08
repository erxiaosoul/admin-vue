import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import register from './register'
import guard from './guard'

const router = createRouter({
  history: createWebHistory(),
  routes: [],
})

export async function setupRouter(app: App) {
  await register(router)
  guard(router)
  app.use(router)
}

export default router
