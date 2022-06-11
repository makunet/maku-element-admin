<template>
	<div>
		<el-card shadow="hover" header="文本复制演示">
			<el-input v-model="text" placeholder="请输入内容">
				<template #append>
					<el-button @click="handleCopy">复制链接</el-button>
				</template>
			</el-input>
		</el-card>
	</div>
</template>

<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const { copy } = useClipboard()

const text = ref('https://maku.net')

const handleCopy = () => {
	copy(text.value)
	ElMessage.success('已复制')
}
</script>
