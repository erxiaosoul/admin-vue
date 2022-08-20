/*
 * @Author: 贾二小
 * @Date: 2022-04-21 21:48:19
 * @LastEditTime: 2022-08-21 00:35:15
 * @LastEditors: 贾二小
 * @FilePath: /admin-vue/types/viteEnv.d.ts
 */
interface ImportMetaEnv {
  VITE_APP_NAME: string
  VITE_APP_VERSION: string
  VITE_APP_LOGO: string
  VITE_API_URL: string
  VITE_MOCK_ENABLE: boolean
  VITE_BASE_HOME: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
