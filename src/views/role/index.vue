<script setup lang="ts">
import { AddOne, Delete, Search } from '@icon-park/vue-next'

const { load, roles } = useRole()

const roleTableColumns = [
  { prop: 'id', label: 'ID', align: 'center', width: 80 },
  { prop: 'name', label: '角色标识', width: 300, search: true },
  { prop: 'title', label: '角色名称', width: 300, search: true },
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
      :columns="roleTableColumns"
      :data="roles?.data"
      :total="roles?.meta.total"
      :size="roles?.meta.per_page"
      @load="load" />
  </el-card>
</template>

<style lang="scss"></style>
