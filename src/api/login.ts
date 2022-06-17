import service from '@/utils/request'

export const useLoginApi = (data: any) => {
	return service.post('/data/login.json', data, {
		auth: {
			username: 'web',
			password: '123456'
		},
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
}

export const useLogoutApi = () => {
	return service.post('/data/success.json')
}
