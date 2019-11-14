import Vue from 'vue'
// 1.Tabbar
import {
  Tabbar,
  TabbarItem
} from 'vant'

// 2.loading组件
import {
  Loading
} from 'vant'

// 3.栅栏格子
import {
  Grid,
  GridItem
} from 'vant'

// 4.倒计时
import {
  CountDown
} from 'vant'

// 5.图片懒加载
import {
  Lazyload
} from 'vant'

// 6.Tabbar 标签栏
import {
  Tab,
  Tabs
} from 'vant'

// 7.分割线
import {
  Divider
} from 'vant'

// 8.轻弹窗
import {
  Toast
} from 'vant'

// 9.导航栏
import {
  NavBar
} from 'vant'

// 10.提交订单
import {
  SubmitBar
} from 'vant'

// 11.复选框
import {
  Checkbox,
  CheckboxGroup
} from 'vant'

// 12.提示框
import {
  Dialog
} from 'vant'

// 13.单元格
import {
  Cell,
  CellGroup
} from 'vant'

// 14.tag标记
import {
  Tag
} from 'vant'

// 15.填写订单
import {
  ContactCard,
  ContactList,
  ContactEdit
} from 'vant'

// 16.icon图标
import {
  Icon
} from 'vant'

// 17.单选框及单选框组
import {
  RadioGroup,
  Radio
} from 'vant'

// 18.switch 开关
import {
  Switch
} from 'vant'

// 19.field输入框
import {
  Field
} from 'vant'

// 20.联系地址
import {
  AddressList
} from 'vant'

// 21.地址编辑
import {
  AddressEdit
} from 'vant'

// 22.省市区选择器
import {
  Area
} from 'vant'

// 23.弹出层
import {
  Popup
} from 'vant'

// 24.滑动单元格
import {
  SwipeCell
} from 'vant'

// 25.van Button
import {
  Button
} from 'vant'

// 26.时间选择
import {
  DatetimePicker
} from 'vant'

// 27.优惠券
import {
  CouponCell,
  CouponList
} from 'vant'

// 28.粘性布局
import {
  Sticky
} from 'vant'

// 29.侧边导航
import {
  Sidebar,
  SidebarItem
} from 'vant'
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Loading)
Vue.use(Grid).use(GridItem)
Vue.use(CountDown)
// options 为可选参数，无则不传
Vue.use(Lazyload)
Vue.use(Tab).use(Tabs)
Vue.use(Divider)
Vue.use(Toast)
Vue.use(NavBar)
Vue.use(SubmitBar)
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(Dialog)
Vue.use(Cell).use(CellGroup)
Vue.use(Tag)
Vue.use(ContactCard).use(ContactList).use(ContactEdit)
Vue.use(Icon)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Switch)
Vue.use(Field)
Vue.use(AddressList)
Vue.use(AddressEdit)
Vue.use(Area)
Vue.use(Popup)
Vue.use(SwipeCell)
Vue.use(Button)
Vue.use(DatetimePicker)
Vue.use(CouponCell).use(CouponList)
Vue.use(Sticky)
Vue.use(Sidebar)
Vue.use(SidebarItem)
