<template>
	<el-popover trigger="click" :width="280">
		<template #reference>
			<svg-icon icon="icon-notification" />
		</template>
		<div class="head-box">
			<div class="head-box-title">通知</div>
			<div v-if="noticeList.length > 0" class="head-box-btn" @click="handleRead">全部已读</div>
		</div>
		<div class="content-box">
			<template v-if="noticeList.length > 0">
				<div v-for="(v, k) in noticeList" :key="k" class="content-box-item">
					<div>{{ v.label }}</div>
					<div class="content-box-msg">
						{{ v.value }}
					</div>
					<div class="content-box-time">{{ v.time }}</div>
				</div>
			</template>
			<el-empty v-else description="暂无通知"></el-empty>
		</div>
		<div v-if="noticeList.length > 0" class="foot-box" @click="handleNoticeLink">全部通知</div>
	</el-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const noticeList = ref([
	{
		label: 'vue-element-plus-admin 发布',
		value: '基于Vue3、TypeScript、Vue Router、Pinia、Axios、i18n、Element Plus、Vite等开发的后台管理模板！',
		time: '2022-05-01'
	},
	{
		label: '技术交流通知',
		value: '技术解答、交流、反馈、建议等，请移步到官方社区，我们会及时回复，也方便今后的小伙伴寻找答案，感谢理解！',
		time: '2022-06-01'
	}
])

const handleRead = () => {
	noticeList.value = []
}

const handleNoticeLink = () => {
	window.open('https://maku.net')
}
</script>

<style scoped lang="scss">
.head-box {
	display: flex;
	border-bottom: 1px solid var(--el-border-color-lighter);
	box-sizing: border-box;
	color: var(--el-text-color-primary);
	justify-content: space-between;
	height: 35px;
	align-items: center;
	.head-box-btn {
		color: var(--el-color-primary);
		font-size: 13px;
		cursor: pointer;
		opacity: 0.8;
		&:hover {
			opacity: 1;
		}
	}
}
.content-box {
	font-size: 13px;
	.content-box-item {
		padding-top: 12px;
		&:last-of-type {
			padding-bottom: 12px;
		}
		.content-box-msg {
			color: var(--el-text-color-secondary);
			margin-top: 5px;
			margin-bottom: 5px;
		}
		.content-box-time {
			color: var(--el-text-color-secondary);
		}
	}
}
.foot-box {
	height: 35px;
	color: var(--el-color-primary);
	font-size: 13px;
	cursor: pointer;
	opacity: 0.8;
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 1px solid var(--el-border-color-lighter);
	&:hover {
		opacity: 1;
	}
}
</style>
