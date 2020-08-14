//同步回调函数
const arr = [1, 3, 5]
arr.forEach(item => { //遍历回调：每取出一个元素，调用一次    
    console.log(item) //不会放入队列  一上来就执行
})
console.log('forEach()之后')

//异步回调函数  会放入队列中将来执行
setTimeout(() => {
    console.log('后执行')
}, 0)
console.log('先执行')


/*
 *Error：所有错误的父类型
 */

//常见内置错误：ReferenceError： 引用的变量不存在
// console.log(a) //ReferenceError: a is not defined
// console.log('......') //没有捕获错误，下面的代码不会执行

//TypeError：数据类型不正确的错误
// let b
// console.log(b.xxx)    //TypeError: Cannot read property 'xxx' of undefined

// let b
// b.xxx()    //TypeError: Cannot read property 'xxx' of undefined

// let b = {}
// b.xxx()    //TypeError: b.xxx is not a function