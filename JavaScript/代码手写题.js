// call实现
Function.prototype.call = function (context, ...args) {
  // context为undefined或null时，则this指向全局window
  if (context === undefined || context === null) context = window
  // 利用Symbol创建一个唯一的key值，防止新增的属性域obj中的属性名重复
  let fn = Symbol()
  // this指向调用call的函数
  context[fn] = this
  // 显示的绑定this，如执行obj.foo(),foo内的this指向obj
  let res = context[fn](...args);
  // 执行完后，删除新增加的属性
  delete context[fn]
  return res
}

// apply 实现
Function.prototype.apply = function (context, args) {
  // context为undefined或null时，则this指向全局window
  if (context === undefined || context === null) context = window
  // 利用Symbol创建一个唯一的key值，防止新增的属性域obj中的属性名重复
  let fn = Symbol()
  // this指向调用call的函数
  context[fn] = this
  // 显示的绑定this，如执行obj.foo(),foo内的this指向obj
  let res = context[fn](...args);
  // 执行完后，删除新增加的属性
  delete context[fn]
  return res
}

// bind实现，要考虑返回的函数作为构造函数的参数被调用的情况
Function.prototype.bind = function (context, ...args) {
  if (context === undefined || context === null) {
    context = window
  }
  let fn = this
  let f = Symbol()
  let result = function (...args1) {
    // result 如果作为构造函数被调用，this指向的时new出来的对象
    // this instanceof fn 判断new出来的对象是否为fn的实例
    if (this instanceof fn) {
      this[f] = fn
      this[f](...args1, ...args)
      delete this[f]
    } else {
      context[f] = fn
      context[f](...args1, ...args)
      delete context[f]
    }
    // 如果绑定的时构造函数，那么需要集成构造函数原型属性和方法
    // 实现继承的方式：使用Object.create(fn.prototype)
    result.prototype = Object.create(fn.prototype)
    return result
  }
}

// 闭包的示例
for (var i = 0; i < 5; i++) {
  setTimeout(function timer () {
    console.log(i);
  }, 1000)
}
// ⬅️利用闭包，将上述题目改成1s后，打印0,1,2,3,4

for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function timer () {
      console.log(j);
    }, 1000)
  })(i)
}

for (var i = 0; i < 5; i++) {
  setTimeout(function timer (i) {
    console.log(i);
  }, 1000, i)
}

// instanceof
function MyInstanceof (left, fn) {
  let proto = left.__proto__
  if (proto) {
    if (proto === fn.prototype) return true
    else instance(proto, fn)
  }
  return false
}