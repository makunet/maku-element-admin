import service from '@/utils/request'

export function useMenuNavApi() {
	return service.get('/data/menu/nav.json')
}

export const useAuthorityListApi = () => {
	return service.get('/data/menu/authority')
}

export const useMenuListApi = (type: Number) => {
	// 菜单类型 0：菜单  1：按钮  2：接口
	const menuType = type === 2 ? 2 : 0

	return service.get('/data/menu/list?type=' + menuType)
}

export const useMenuApi = (id: Number) => {
	return service.get('/data/menu/' + id)
}
