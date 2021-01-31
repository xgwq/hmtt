const fn = () => {
  console.log('我是fn方法')
}

const fn2 = () => {
  console.log('我是fn2方法')
}

// ES6模块化规范
// 导出:export / export default
// 导入:import {解构赋值} from '用export导出的模块'
// 导入:import 变量 from '用export default导出的模块'

// 使用场景:按需加载使用export / 如果都要一次性导出export default

// 使用场景1:如果都要一次性导出export default
// export default {
//   // 键和值名字相同,则可以省略值
//   fn,
//   fn2
// }
// 外面对应的
// import obj from './index.js'

// 使用场景2:按需导出
// export导出某个变量/方法
// 外面对应的
// export const fn = () => {
//     console.log('我是fn方法')
//   }
// export const fn2 = () => {
//     console.log('我是fn2方法')
//   }
// import {变量名/方法名} from './index.js
