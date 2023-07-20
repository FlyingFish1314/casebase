//  传统闭包
function PrintMessage (name) {
  return function printName () {
    return `${name}，您好`
  }
}
let greetings1 = PrintMessage('先生')
console.log("🚀 ~ file: 闭包.js:8 ~ greetings1:", greetings1())

//  对象
function PrintMessageB () {
  return `${this.name}，您好`
}
let greetings2 = PrintMessageB.bind({ name: '先生' })
console.log("🚀 ~ file: 闭包.js:17 ~ greetings2:", greetings2())

/**
 *  对象的形式将this绑定到greeting2上，可以获取name值，达到和闭包一样的效果，
 * 但是不需要真正的创建闭包，只需要将this指向引用对象即可
 */