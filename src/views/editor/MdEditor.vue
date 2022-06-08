<template>
	<div>
		<MdEditor v-model="editorValue" height="500px"></MdEditor>
	</div>
</template>

<script lang="ts" setup name="EditorMdEditor">
import MdEditor from '@/components/MdEditor/index.vue'
import { ref } from 'vue'

const editorValue = ref('maku')
</script>
