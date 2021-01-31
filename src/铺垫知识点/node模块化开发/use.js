// 模块化好处
// 独立作用域(不用关系项目中每个文件里变量是否冲突)

// 想要使用另外文件里的内容 - 需要先导入过来(模块化)
// require()里的值有3种
// (1):核心模块-node自带的:http,path,fs,query... require("http")
// (2):第三方模块(npm下载的):axios,md5,moment... require("axios")
// (3):自定义模块(我自己文件/不仅仅局限于js):db.json,index.js,... require("必须用相对路径/绝对路径")

// 引入index.js里导出的对象
const obj = require('./index.js')
// obj={fn2:函数体}
console.log(obj) // {Fn2:[Function:fn2]}
