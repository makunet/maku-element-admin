import service from '@/utils/request'

export const usePostApi = (id: Number) => {
	return service.get('/data/post/1.json')
}

export const usePostListApi = () => {
	return service.get('/data/post/list.json')
}
