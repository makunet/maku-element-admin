<template>
	<el-dialog v-model="visible" :title="!dataForm.id ? '新增' : '修改'" :close-on-click-modal="false">
		<el-form ref="dataFormRef" :model="dataForm" :rules="dataRules" label-width="120px" @keyup.enter="submitHandle()">
			<el-form-item prop="username" label="用户名">
				<el-input v-model="dataForm.username" placeholder="用户名"></el-input>
			</el-form-item>
			<el-form-item prop="realName" label="姓名">
				<el-input v-model="dataForm.realName" placeholder="姓名"></el-input>
			</el-form-item>
			<el-form-item prop="orgId" label="所属机构">
				<el-tree-select
					v-model="dataForm.orgId"
					:data="orgList"
					value-key="id"
					:props="{ label: 'name', children: 'children' }"
					style="width: 100%"
				/>
			</el-form-item>
			<el-form-item prop="mobile" label="手机号">
				<el-input v-model="dataForm.mobile" placeholder="手机号"></el-input>
			</el-form-item>
			<el-form-item prop="email" label="邮箱">
				<el-input v-model="dataForm.email" placeholder="邮箱"></el-input>
			</el-form-item>
			<el-form-item prop="password" label="密码">
				<el-input v-model="dataForm.password" type="password" placeholder="密码"></el-input>
			</el-form-item>
			<el-form-item prop="roleIdList" label="所属角色">
				<el-select v-model="dataForm.roleIdList" multiple placeholder="所属角色" style="width: 100%">
					<el-option v-for="role in roleList" :key="role.id" :label="role.name" :value="role.id"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item prop="postIdList" label="所属岗位">
				<el-select v-model="dataForm.postIdList" multiple placeholder="所属岗位" style="width: 100%">
					<el-option v-for="post in postList" :key="post.id" :label="post.postName" :value="post.id"></el-option>
				</el-select>
			</el-form-item>
		</el-form>
		<template #footer>
			<el-button @click="visible = false">取消</el-button>
			<el-button type="primary" @click="submitHandle()">确定</el-button>
		</template>
	</el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus/es'

const emit = defineEmits(['refreshDataList'])

const visible = ref(false)
const postList = ref<any[]>([])
const roleList = ref<any[]>([])
const orgList = ref([])
const dataFormRef = ref()

const dataForm = reactive({
	id: '',
	username: '',
	realName: '',
	orgId: '',
	orgName: '',
	password: '',
	email: '',
	mobile: '',
	roleIdList: [] as any[],
	postIdList: [] as any[],
	status: 1
})

const init = (id?: number) => {
	visible.value = true
	dataForm.id = ''

	// 重置表单数据
	if (dataFormRef.value) {
		dataFormRef.value.resetFields()
	}
}

const dataRules = ref({
	username: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
	realName: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
	mobile: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
	orgId: [{ required: true, message: '必填项不能为空', trigger: 'blur' }]
})

// 表单提交
const submitHandle = () => {
	dataFormRef.value.validate((valid: boolean) => {
		if (!valid) {
			return false
		}

		ElMessage.success({
			message: '操作成功',
			duration: 500,
			onClose: () => {
				visible.value = false
				emit('refreshDataList')
			}
		})
	})
}

defineExpose({
	init
})
</script>
