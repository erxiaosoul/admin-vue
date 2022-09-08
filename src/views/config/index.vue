<script setup lang="ts">
import { AddOne, Delete, Search } from '@icon-park/vue-next'
const { load, configs } = useConfig()

const configTableColumns = [
  { prop: 'id', label: 'ID', align: 'center', width: 80 },
  { prop: 'category', label: '分类', width: 300, search: true },
  { prop: 'title', label: '标题', width: 300, search: true },
  { prop: 'key', label: '键', search: true },
  { prop: 'value', label: '值', width: 300, search: true },
  { prop: 'created_at', label: '创建时间', type: 'date', width: 120 },
  { prop: 'updated_at', label: '更新时间', type: 'date', width: 120 },
] as TableColumnsType[]

const key = ref('')
</script>

<template>
  <el-card shadow="hover">
    <div class="flex items-center h-10 mb-1">
      <div class="flex-grow w-[70%] space-x-1">
        <el-button type="primary" :icon="AddOne" />
        <el-button type="danger" :icon="Delete" />
      </div>
      <div class="flex-none w-48">
        <div class="flex items-center">
          <el-input v-model="key" placeholder="Please Input" :suffix-icon="Search" />
        </div>
      </div>
    </div>
    <ExTable
      :columns="configTableColumns"
      :data="configs?.data"
      :total="configs?.meta.total"
      :size="configs?.meta.per_page"
      @load="load" />
  </el-card>
</template>

<style lang="scss"></style>
