<template>
	<div ref="main" style="width: 100%; height: calc(100vh - 110px - var(--theme-header-height))"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

onMounted(() => {
	init()
})

const main = ref()
const init = () => {
	const myChart = echarts.init(main.value)

	// Generate data
	let category = []
	let dottedBase = +new Date()
	let lineData = []
	let barData = []
	for (let i = 0; i < 20; i++) {
		let date = new Date((dottedBase += 3600 * 24 * 1000))
		category.push([date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'))
		let b = Math.random() * 200
		let d = Math.random() * 200
		barData.push(b)
		lineData.push(d + b)
	}

	// 绘制图表
	myChart.setOption({
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				// Use axis to trigger tooltip
				type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
			}
		},
		legend: {},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			type: 'value'
		},
		yAxis: {
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		},
		series: [
			{
				name: 'Direct',
				type: 'bar',
				stack: 'total',
				label: {
					show: true
				},
				emphasis: {
					focus: 'series'
				},
				data: [320, 302, 301, 334, 390, 330, 320]
			},
			{
				name: 'Mail Ad',
				type: 'bar',
				stack: 'total',
				label: {
					show: true
				},
				emphasis: {
					focus: 'series'
				},
				data: [120, 132, 101, 134, 90, 230, 210]
			},
			{
				name: 'Affiliate Ad',
				type: 'bar',
				stack: 'total',
				label: {
					show: true
				},
				emphasis: {
					focus: 'series'
				},
				data: [220, 182, 191, 234, 290, 330, 310]
			},
			{
				name: 'Video Ad',
				type: 'bar',
				stack: 'total',
				label: {
					show: true
				},
				emphasis: {
					focus: 'series'
				},
				data: [150, 212, 201, 154, 190, 330, 410]
			},
			{
				name: 'Search Engine',
				type: 'bar',
				stack: 'total',
				label: {
					show: true
				},
				emphasis: {
					focus: 'series'
				},
				data: [820, 832, 901, 934, 1290, 1330, 1320]
			}
		]
	})
}
</script>
