<!--
 * @Author: 贾二小
 * @Date: 2022-08-15 14:48:47
 * @LastEditTime: 2022-08-25 18:39:19
 * @LastEditors: 贾二小
 * @FilePath: /admin-vue/src/components/ex/table.vue
-->
<script setup lang="ts">
import dayjs from 'dayjs'

interface props {
  data: Record<string, any>[]
  columns: TableColumnsType[]
  emptyText?: string
  hidePagination?: boolean
  total?: number
  size?: number
  params?: Record<string, any>
}

const { data, columns, hidePagination, total, size, params = {} } = defineProps<props>()

const emit = defineEmits(['load'])

onMounted(() => {
  emit('load', params)
})

//合并分页条件
Object.assign(params, { page: 1, per_page: 5 })

const currentChange = async (num: number) => {
  params.page = num
  emit('load', params)
}
const sizeChange = async (num: number) => {
  params.per_page = num
  emit('load', params)
}

const filterChange = (filters: any) => {
  Object.assign(params, filters)
  emit('load', params)
}
</script>

<template>
  <el-table :data="data" border stripe :highlight-current-row="true" style="width: 100%" @filter-change="filterChange">
    <slot></slot>
    <template v-for="(col, index) in columns" :key="index">
      <el-table-column
        v-if="!col.hide"
        :column-key="col.prop"
        :label="col.label"
        :prop="col.prop"
        :width="col.width"
        :sortable="col.sortable"
        :fixed="col.fixed"
        :filters="col.filters">
        <template #default="scope">
          <template v-if="col.type === 'image'">
            <el-image
              preview-teleported
              :hide-on-click-modal="true"
              :preview-src-list="[scope.row[col.prop]!]"
              :src="scope.row[col.prop]"
              fit="cover"
              class="w-10 h-10 rounded-lg" />
          </template>
          <template v-else-if="col.type === 'radio'">
            <span v-for="c in col.options" v-show="c[1] == scope.row[col.prop]">
              <el-tag>{{ c[0] }}</el-tag>
            </span>
          </template>
          <template v-else-if="col.type === 'tag'">
            <el-tag
              type="success"
              size="small"
              effect="dark"
              v-for="(b, key) of scope.row[col.prop]"
              :key="key"
              class="m-1">
              {{ b[col.tag_field!] }}
            </el-tag>
          </template>
          <template v-else-if="col.type === 'date'"> {{ dayjs(scope.row[col.prop]).format('YYYY-mm-DD') }} </template>
          <slot v-else :name="col.prop" v-bind="scope">
            {{ col.prop.split('.').reduce((row, field) => row[field], scope.row) }}
          </slot>
        </template>
      </el-table-column>
    </template>
    <template #empty>
      <el-empty :description="emptyText" :image-size="100"></el-empty>
    </template>
  </el-table>

  <el-pagination
    v-if="!hidePagination"
    background
    :small="true"
    layout="total, sizes, prev, pager, next"
    :total="total"
    :page-size="size"
    :page-sizes="[5, 10, 15, 30, 50]"
    :hide-on-single-page="true"
    @size-change="sizeChange"
    @current-change="currentChange"
    class="mt-3" />
</template>
