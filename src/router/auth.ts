import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/auth',
  component: () => import('@/layouts/auth.vue'),
  meta: { guest: true },
  children: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/other/login.vue'),
    },
  ],
} as RouteRecordRaw
