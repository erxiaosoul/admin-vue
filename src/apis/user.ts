import { http } from '@/plugins/axios'

export function get(params: Record<any, any> = {}) {
  return http.request<UserModel[], ResponsePageResult<UserModel>>({ url: 'user', params })
}

export function add(data: UserModel) {
  return http.request({ url: 'user', method: 'POST', data })
}

export function find(id: number) {
  return http.request<UserModel>({ url: `user/${id}` }).then((r) => r.data)
}

export function update(data: UserModel) {
  return http.request({ url: `user/${data.id}`, method: 'PUT', data })
}

export function del(id: number) {
  return http.request({ url: `user/${id}`, method: 'DELETE' })
}

export function currentUserInfo() {
  return http
    .request<UserModel>({
      url: `current_user_info`,
    })
    .then((r) => r.data)
}

export function getUser(id: number) {
  return http
    .request<UserModel>({
      url: `user/${id}`,
    })
    .then((r) => r.data)
}
