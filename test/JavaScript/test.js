// 闭包的示例
// for (var i = 0; i < 5; i++) {
//   setTimeout(function timer () {
//     console.log(i);
//   }, 1000)
// }
// ⬅️利用闭包，将上述题目改成1s后，打印0,1,2,3,4

// for (var i = 0; i < 5; i++) {
//   (function (j) {
//     setTimeout(function timer () {
//       console.log(j);
//     }, 1000)
//   })(i)
// }

// for (var i = 0; i < 5; i++) {
//   setTimeout(function timer (i) {
//     console.log(i);
//   }, 1000, i)
// }