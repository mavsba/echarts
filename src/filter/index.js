import Vue from 'vue'
// 日期格式化的过滤器
Vue.filter('date', function (value, formatStr) {
  return value * 10
})
