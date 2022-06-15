import service from '@/utils/request'

export const useUserInfoApi = () => {
	return service.get('/data/user/info.json')
}

export const updatePasswordApi = (data: any) => {
	return service.put('/data/success.json', data)
}

export const useUserApi = (id: number) => {
	return service.get('/data/user/1.json')
}
