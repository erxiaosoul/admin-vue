/*
 * @Author: 贾二小
 * @Date: 2022-08-20 13:53:12
 * @LastEditTime: 2022-08-21 00:42:55
 * @LastEditors: 贾二小
 * @FilePath: /admin-vue/vite/plugins/vue.ts
 */
import { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

//vue框架
export default (plugins: Plugin[], isBuild: boolean, env: ImportMetaEnv) => {
  //plugins.push(vue({ reactivityTransform: true }))
  plugins.push(vue())
}
