// function a() {
//     return new Promise((resolve, reject) => {
//         return resolve(5);
//         console.log("a");
//     })
// }

// // console.log(a());

// a().then(res => {
//     console.log(res);
// })

// function a() {
//     return new Promise((resolve, reject) => {
//         reject(222);
//     })
// }

// async function testAsync() {
//     return new Promise(async (resolve, reject) => {
//         await a().then().catch(err => {
//             console.log(err);
//         });
//         console.log(3333);
//     })
// }

// testAsync().then(res => {
//     console.log("res ", res);
// }).catch(err => {
//     console.log("err ", err);
// })

// let result = testAsync()
// console.log(result);




function something() {
    if (Date.now() % 2 === 1) {
        console.log('当前时间为奇数，可以执行任务')
    } else { //如果时间为偶数，抛出异常，由调用者来处理
        throw new Error('当前时间为偶数，无法执行任务')
    }
}
//捕获处理异常
try {
    something()
} catch (error) {
    alert(error.message) //调用者决定如何处理异常
}