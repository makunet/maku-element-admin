import service from '@/utils/request'

export const useOrgListApi = () => {
	return service.get('/data/org/list.json')
}

export const useOrgApi = (id: Number) => {
	return service.get('/data/org/1.json')
}
