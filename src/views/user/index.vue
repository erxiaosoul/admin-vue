<script setup lang="ts">
import { AddOne, Audit, Delete, Search, Filter } from '@icon-park/vue-next'
const { load, users } = useUser()

const userTableColumns = [
  { prop: 'id', label: 'ID', align: 'center', width: 80 },
  { prop: 'name', label: '姓名', width: 200 },
  { prop: 'email', label: '邮箱', width: 220 },
  { prop: 'mobile', label: '电话', width: 150 },
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

const dialogFormVisible = ref(false)

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
const labelWidth = ref('140px')

const key = ref('')
</script>

<template>
  <el-card shadow="hover">
    <div class="flex items-center h-10 mb-1">
      <div class="flex-grow w-[70%] space-x-1">
        <el-button type="primary" :icon="AddOne" @click="dialogFormVisible = true" />
        <el-button type="primary" :icon="Audit" />
        <el-button type="danger" :icon="Delete" />
      </div>
      <div class="flex-none w-48">
        <div class="flex items-center">
          <el-input v-model="key" placeholder="Please Input" :suffix-icon="Search" />
        </div>
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

  <el-dialog v-model="dialogFormVisible" title="新增用户">
    <el-form :model="form">
      <el-form-item label="姓名" :label-width="labelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>

      <el-form-item label="性别" :label-width="labelWidth">
        <el-select v-model="form.region" placeholder="请选择性别">
          <el-option label="男" value="1" />
          <el-option label="女" value="0" />
        </el-select>
      </el-form-item>
    </el-form>
    <!-- <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
      </span>
    </template> -->
  </el-dialog>
</template>

<style lang="scss"></style>
