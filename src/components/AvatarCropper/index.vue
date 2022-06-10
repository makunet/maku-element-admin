<template>
	<el-dialog v-model="visible" title="修改头像" width="600px">
		<div class="cropper-warp">
			<div class="cropper-warp-left">
				<img ref="imgRef" :src="img" />
			</div>
			<div class="cropper-warp-right">
				<div class="cropper-warp-right-title">预览</div>
				<div class="cropper-warp-right-item">
					<div class="cropper-warp-right-value">
						<div class="img-preview preview-lg" />
					</div>
					<div class="cropper-warp-right-label">100 x 100</div>
				</div>
				<div class="cropper-warp-right-item">
					<div class="cropper-warp-right-value">
						<div class="img-preview preview-md" />
					</div>
					<div class="cropper-warp-right-label">50 x 50</div>
				</div>
			</div>
		</div>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="visible = false">取消</el-button>
				<el-button type="primary" @click="handleUpload">上传</el-button>
				<el-button type="primary" @click="handleSubmit">确定</el-button>
			</span>
			<input ref="fileRef" style="display: none" type="file" accept="image/*" @change="handleFileChange" />
		</template>
	</el-dialog>
</template>

<script lang="ts" setup>
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'
import { nextTick, ref } from 'vue'

const visible = ref(false)
const imgRef = ref()
const fileRef = ref()
const img = ref('')
const cropper = ref<any>(null)

// 打开
const openDialog = (cropperImg: any) => {
	img.value = cropperImg
	visible.value = true
	nextTick(() => {
		initCropper()
	})
}

// 初始化
const initCropper = () => {
	cropper.value = new Cropper(imgRef.value, {
		viewMode: 1,
		dragMode: 'none',
		initialAspectRatio: 1,
		background: false,
		autoCropArea: 0.6,
		aspectRatio: 1,
		preview: '.img-preview'
	})
}

// 上传
const handleUpload = () => {
	fileRef.value.click()
}

// 处理选择的文件
const handleFileChange = (e: any) => {
	const file = e.target.files[0]
	const URL = window.URL || window.webkitURL
	cropper.value.replace(URL.createObjectURL(file))
}

// 提交
const handleSubmit = () => {
	// const base64 = cropper.value.getCroppedCanvas().toDataURL('image/jpeg')
	// console.log(base64)
}

defineExpose({
	openDialog
})
</script>

<style scoped lang="scss">
.img-preview {
	overflow: hidden;
	border-radius: var(--el-border-radius-circle);
	margin: auto;
}

.img-preview > img {
	max-width: 100%;
}

.preview-lg {
	height: 100px;
	width: 100px;
	border-radius: 50%;
}
.preview-md {
	height: 50px;
	width: 50px;
	border-radius: 50%;
}
.cropper-warp {
	display: flex;
	.cropper-warp-left {
		position: relative;
		display: inline-block;
		height: 350px;
		flex: 1;
		border: 1px solid var(--el-border-color);
		background: var(--el-color-white);
		overflow: hidden;
		background-repeat: no-repeat;
		cursor: move;
		border-radius: var(--el-border-radius-base);
		#avatar-cropper {
			width: 100%;
			height: 100%;
		}
	}
	.cropper-warp-right {
		width: 150px;
		height: 350px;
		.cropper-warp-right-title {
			text-align: center;
			height: 20px;
			line-height: 20px;
		}
		.cropper-warp-right-item {
			margin: 15px 0;
			.cropper-warp-right-label {
				text-align: center;
				font-size: 12px;
				color: var(--el-text-color-primary);
				height: 30px;
				line-height: 30px;
			}
		}
	}
}
</style>
