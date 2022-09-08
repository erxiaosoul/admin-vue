import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    auth?: boolean
    menu?: MenuModel
    enterClass?: string
    leaveClass?: string
    permission?: string
    type?: 'menu' | 'iframe' | 'link' | 'button'
    icon?: string
    affix?: boolean
  }
}
