import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/',
  name: 'layout',
  redirect: '/home',
  component: () => import('@/layouts/index.vue'),
  meta: { guest: true },
  children: [
    {
      path: '/abort',
      name: 'other.abort',
      component: () => import('@/views/other/abort.vue'),
      meta: { icon: 'DataAnalysis', title: '关于' },
    },
    {
      path: '/home',
      name: 'dashboard.home',
      component: () => import('@/views/dashboard/home.vue'),
      meta: { icon: 'PictureRounded', title: '控制台' },
    },
    {
      path: '/system/user',
      name: 'user.index',
      component: () => import('@/views/user/index.vue'),
      meta: { icon: 'User', title: '用户管理' },
    },
    {
      path: '/system/role',
      name: 'role.index',
      component: () => import('@/views/role/index.vue'),
      meta: { icon: 'ColdDrink', title: '角色管理' },
    },
    {
      path: '/system/permission',
      name: 'permission.index',
      component: () => import('@/views/permission/index.vue'),
      meta: { icon: 'Orange', title: '权限管理' },
    },
    {
      path: '/system/menu',
      name: 'menu.index',
      component: () => import('@/views/menu/index.vue'),
      meta: { icon: 'Menu', title: '菜单管理' },
    },
    {
      path: '/system/config',
      name: 'config.index',
      component: () => import('@/views/config/index.vue'),
      meta: { icon: 'Operation', title: '配置管理' },
    },
  ],
} as RouteRecordRaw
