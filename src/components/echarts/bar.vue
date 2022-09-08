<script setup lang="ts">
import * as echarts from 'echarts/core'
import { TitleComponent, GridComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([TitleComponent, GridComponent, BarChart, CanvasRenderer])
const props = defineProps<{ options: any }>()
const chartRef = ref<HTMLDivElement>()
let chart: echarts.ECharts | null = null
const resizeHandler = () => {
  chart?.resize()
}
onMounted(() => {
  nextTick(() => {
    chart = echarts.init(chartRef.value as HTMLDivElement)
    chart.setOption({ ...props.options })
  })

  window.addEventListener('resize', resizeHandler)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler)
  chart?.dispose()
})
</script>

<template><div ref="chartRef"></div></template>

<style lang="scss"></style>
