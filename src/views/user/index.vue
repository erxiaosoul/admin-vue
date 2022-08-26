<!--
 * @Author: 贾二小
 * @Date: 2022-07-30 15:39:07
 * @LastEditTime: 2022-08-26 18:22:42
 * @LastEditors: 贾二小
 * @FilePath: /admin-vue/src/views/user/index.vue
-->
<script setup lang="ts">
import { AddOne, Audit, Delete, Search, Filter } from '@icon-park/vue-next'
const { load, users } = useUser()

const userTableColumns = [
  { prop: 'id', label: 'ID', align: 'center', width: 80 },
  { prop: 'name', label: '昵称' },
  { prop: 'email', label: '邮箱', width: 300, search: true },
  {
    prop: 'sex',
    label: '性别',
    align: 'center',
    type: 'radio',
    options: [
      ['男', 1],
      ['女', 0],
    ],
    width: 80,
    filters: [
      {
        text: '男',
        value: 1,
      },
      {
        text: '女',
        value: 0,
      },
    ],
  },
  { prop: 'created_at', label: '注册时间', type: 'date', width: 120 },
  { prop: 'updated_at', label: '更新时间', type: 'date', width: 120 },
] as TableColumnsType[]
</script>

<template>
  <el-card shadow="hover">
    <div class="flex items-center h-10 mb-1">
      <div class="flex-grow w-[70%] space-x-1">
        <el-button type="primary" :icon="AddOne" @click="add">添加</el-button>
        <el-button type="primary" :icon="Audit">审核</el-button>
        <el-button type="danger" :icon="Delete">删除</el-button>
      </div>
      <div class="flex-none w-72">
        <div class="flex items-center"></div>
      </div>
    </div>

    <ExTable
      :columns="userTableColumns"
      :data="users?.data"
      :total="users?.meta.total"
      :size="users?.meta.per_page"
      @load="load">
      <el-table-column label="操作" fixed="right" align="left" width="170">
        <template #default="scope">
          <el-button-group>
            <el-button text type="primary" size="small">查看</el-button>
            <el-button text type="primary" size="small">编辑</el-button>
            <el-button text type="primary" size="small">删除</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </ExTable>
  </el-card>
</template>

<style lang="scss"></style>
