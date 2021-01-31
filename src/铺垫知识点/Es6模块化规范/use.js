// 导入全部暴露
// import obj from './index.js'
// console.log(obj) // {fn:f,fn2:f}

// 导入"按需加载",必须要按需解构引入
import { fn, fn2 } from './index.js'
console.log(fn, fn2)
