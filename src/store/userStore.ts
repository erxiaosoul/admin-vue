import { currentUserInfo } from '@/apis/user'
import { isLogin } from '@/utils/helper'
import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => {
    return {
      info: {} as UserModel,
      permissions: [] as PermissionModel[],
    }
  },
  actions: {
    async getUserInfo() {
      if (isLogin()) {
        this.info = await currentUserInfo()
        this.permissions = this.info.roles.reduce((permissions: PermissionModel[], role: RoleModel) => {
          permissions.push(...role.permissions!)
          return permissions
        }, [])
      }
    },
  },
})
