/*
 * @Author: 贾二小
 * @Date: 2022-08-20 21:25:06
 * @LastEditTime: 2022-08-20 21:42:19
 * @LastEditors: 贾二小
 * @FilePath: /admin-vue/src/plugins/elementui/index.ts
 */
import { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default (app: App) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
