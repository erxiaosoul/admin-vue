import { Router, RouteRecordRaw, RouteRecordNormalized } from 'vue-router'

//注册路由
function autoloadModuleRoutes(): RouteRecordNormalized[] {
  const routes = [] as RouteRecordNormalized[]
  register(routes, import.meta.glob('../*.ts', { eager: true, import: 'default' }))

  return routes
}

//绑定路由
function register(routes: RouteRecordNormalized[], modules: Record<string, any>) {
  Object.keys(modules).forEach((key) => {
    routes.push(modules[key])
  })
}

export default async (router: Router) => {
  let routes = autoloadModuleRoutes()

  //过滤掉children为空的路由
  routes = routes.filter((r) => r.children.length)

  routes.forEach((r) => {
    router.addRoute(r as RouteRecordRaw)
  })
}
