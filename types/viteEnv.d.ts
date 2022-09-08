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
