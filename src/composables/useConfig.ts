import * as api from '@/apis/config'
import router from '@/router/register'
import { ElMessageBox } from 'element-plus'

export default () => {
  const configs = ref<ResponsePageResult<ConfigModel>>()
  const config = ref<ConfigModel>()
  const id = router.currentRoute.value.query.id as any

  const load = async (params: Record<any, any> = {}) => {
    configs.value = await api.get(params)
  }

  const del = async (model: ConfigModel) => {
    await ElMessageBox.confirm(`确认删除【${model.title}】配置吗？`)
    await api.del(model.id!)
    load()
  }

  const add = async (model: ConfigModel) => {
    await api.add(model)
    //跳转到主页面
  }

  const update = async () => {
    await api.update(config.value!)
    //跳转到主页面
  }

  const find = async (id: any) => {
    config.value = await api.find(id)
  }

  const current = async () => {
    config.value = await api.find(id)
  }

  return { id, configs, config, del, load, add, update, find, current }
}
