import env from '@/utils/env'
import Axios from './Axios'
const http = new Axios({
  baseURL: env.VITE_API_URL,
  timeout: 10000,
})

export default () => {}
export { http }
