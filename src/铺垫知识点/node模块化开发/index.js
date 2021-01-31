// node(独立软件)-脱离浏览器
// node命令来执行js文件
// node世界里使用commonJS规范来模块化的导出和导入
// 具体代码:
// 导出:exports / module.exports -导入: let 变量=require("模块名")

const fn2 = () => {
  console.log('我是fn2方法')
}

exports.fn = function () {
  console.log('我是fn方法')
}

// module.exports如果赋予了一个新对象,上面的就会被覆盖了
module.exports = {
  fn2: fn2
}
