import { http } from '@/plugins/axios'

export function get(params: Record<any, any> = {}) {
  return http.request<PermissionModel[], ResponsePageResult<PermissionModel>>({ url: 'permission', params })
}

export function add(data: PermissionModel) {
  return http.request({ url: 'permission', method: 'POST', data })
}

export function find(id: number) {
  return http.request<PermissionModel>({ url: `role/${id}` }).then((r) => r.data)
}

export function update(data: PermissionModel) {
  return http.request({ url: `/permission/${data.id}`, method: 'PUT', data })
}

export function del(id: number) {
  return http.request({ url: `permission/${id}`, method: 'DELETE' })
}
