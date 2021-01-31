import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入全局样式
import './styles/index.css'
// 下载好了element模块之后,需要引入到文件里使用
// 之前cdn引入方式script标签src,但是如今工程化npm管理都是模块都import引入(把组件引入)
// 看官网说明
import ElementUI from 'element-ui'
// 引入element-ui相关的(样式)
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// 为vue开发的额外插件,需要用Vue.use()集成到Vue的类身上(让所有对象使用)
// vue的插件:vue-router element-ui vuex ...
// 不是vue的插件(独立使用):axios moment md5 ...

// 这句话意思:项目就有了很多组件名可以直接使用例如:el-table / el-form标签
Vue.use(ElementUI)// 全局组件(直接使用)

/**
 *组件分类:
 *全局组件 Vue.component()定义 - 定义好了整个项目无论在哪个.vue组件中都能"直接"使用
 *局部组件
 *(1):先import 引入这个组件过来
 *(2):在js处components:声明组件名字:引过来的组件对象
 *(3):才能在页面使用
 */

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
