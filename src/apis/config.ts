import { http } from '@/plugins/axios'

export function get(params: Record<any, any> = {}) {
  return http.request<ConfigModel[], ResponsePageResult<ConfigModel>>({ url: 'config', params })
}

export function add(data: ConfigModel) {
  return http.request({ url: 'config', method: 'POST', data })
}

export function find(id: number) {
  return http.request<ConfigModel>({ url: `config/${id}` }).then((r) => r.data)
}

export function update(data: ConfigModel) {
  return http.request({ url: `config/${data.id}`, method: 'PUT', data })
}

export function del(id: number) {
  return http.request({ url: `config/${id}`, method: 'DELETE' })
}
