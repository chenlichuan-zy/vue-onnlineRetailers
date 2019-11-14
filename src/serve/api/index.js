import ajax from './ajax'
const BASE_URL = ' http://localhost:7300/mock/5dcbf4265c3af8431c2f4875/api/'
// 首页模块
export const getHomeApi = () => ajax(BASE_URL + 'homeApi')
