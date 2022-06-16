import service from '@/utils/request'

export const useRoleApi = (id: number) => {
	return service.get('/data/role/1.json')
}
