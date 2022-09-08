import { defineStore } from 'pinia'
import { RouteLocationNormalized } from 'vue-router'
import _ from 'lodash'
import { myMenu } from '@/apis/menu'
import { arrayToTree, isLogin } from '@/utils/helper'

export default defineStore('menu', {
  state: () => {
    return {
      menus: [] as MenuModel[],
      menuTree: [] as MenuModel[],
      historyMenu: [] as RouteLocationNormalized[],
    }
  },
  actions: {
    removeHistoryMenu(route: RouteLocationNormalized) {
      const index = this.historyMenu.indexOf(route)
      this.historyMenu.splice(index, 1)
    },
    addHistoryMenu(route: RouteLocationNormalized) {
      if (!route.meta?.title) return
      const isHas = this.historyMenu.some((menu) => menu.fullPath == route.fullPath)
      if (!isHas) {
        this.historyMenu.push(_.cloneDeep(route))
      }
    },
    async getMenus() {
      if (isLogin()) {
        this.menus = await myMenu()
        this.menuTree = arrayToTree(this.menus, 0)
      }
    },
  },
})
