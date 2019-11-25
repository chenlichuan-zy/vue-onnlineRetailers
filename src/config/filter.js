import Vue from 'vue'
Vue.filter("formatPrice", function (val) {
    return "￥" + val
})
