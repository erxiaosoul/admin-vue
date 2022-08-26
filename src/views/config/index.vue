<!--
 * @Author: 贾二小
 * @Date: 2022-07-30 15:39:07
 * @LastEditTime: 2022-08-24 22:21:25
 * @LastEditors: 贾二小
 * @FilePath: /admin-vue/src/views/config/index.vue
-->
<script setup lang="ts">
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
</script>

<template>
  <el-card shadow="hover">
    <ExTable
      :columns="configTableColumns"
      :data="configs?.data"
      :total="configs?.meta.total"
      :size="configs?.meta.per_page"
      @load="load" />
  </el-card>
</template>

<style lang="scss"></style>
