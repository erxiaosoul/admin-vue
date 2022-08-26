<!--
 * @Author: 贾二小
 * @Date: 2022-08-17 13:37:29
 * @LastEditTime: 2022-08-24 22:21:00
 * @LastEditors: 贾二小
 * @FilePath: /admin-vue/src/views/menu/index.vue
-->
<script setup lang="ts">
const { load, menus } = useMenu()

const menuTableColumns = [
  { prop: 'id', label: 'ID', align: 'center', width: 80 },
  { prop: 'pid', label: 'PID', align: 'center', width: 80 },
  { prop: 'name', label: '名称', search: true },
  { prop: 'path', label: '地址', search: true },
  { prop: 'meta.icon', label: '图标' },
  { prop: 'meta.title', label: '标题' },
  { prop: 'created_at', label: '创建时间', type: 'date', width: 120 },
  { prop: 'updated_at', label: '更新时间', type: 'date', width: 120 },
] as TableColumnsType[]
</script>

<template>
  <el-card shadow="hover">
    <ExTable
      :columns="menuTableColumns"
      :data="menus?.data"
      :total="menus?.meta.total"
      :size="menus?.meta.per_page"
      @load="load" />
  </el-card>
</template>

<style lang="scss"></style>
