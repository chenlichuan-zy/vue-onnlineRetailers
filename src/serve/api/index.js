import ajax from './ajax'
// const BASE_URL = ' http://localhost:7300/mock/5dcbf4265c3af8431c2f4875/api/'
const BASE_URL = 'https://mock.cangdu.org/mock/5d940466d360e8289c6a8eb7/api/'
// 首页模块
export const getHomeApi = () => ajax(BASE_URL + 'homeApi')
// 商品分类接口
export const getCategoryList = () => ajax(BASE_URL + 'homeApi/categories')
// 获取分类右边的数据
export const getRightDataList = (params) => ajax(BASE_URL + 'homeApi/categoriesdetail' + params)
