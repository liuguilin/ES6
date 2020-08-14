//reduce 一维数组变二维数组
let arr = [1, 2, 3, 2, 5, 8, 5, 6, 8, 9, 10];

//方式一
// arr = arr.reduce((prev, next, index) => {
//     if (index % 2 === 0) {
//         prev.push([]);
//     }
//     prev[prev.length - 1].push(next);
//     return prev;
// }, []);

//方式二
// arr = arr.reduce((prev, next, index) => {
//     return (
//         (index % 2 === 0 ?
//             prev.push([next]) :
//             prev[prev.length - 1].push(next)) && prev
//     );
// }, []);

//方式三
// arr = arr.reduce(
//     (prev, next, index) =>
//     (index % 2 === 0 ?
//         prev.push([next]) :
//         prev[prev.length - 1].push(next)) && prev,

//     []
// );

console.log(arr);

//reduce 数组去重
var arr2 = [
    { value: "苹果", id: 1 },
    { value: "香蕉", id: 2 },
    { value: "苹果", id: 3 },
    { value: "苹果", id: 4 },
    { value: "香蕉", id: 5 },
];

// 方式一
// var hash = {};
// arr2 = arr2.reduce((item, next) => {
//     hash[next.value] ? "" : (hash[next.value] = true && item.push(next));
//     return item;
// }, []);

//方式二
// let hash = {};
// arr = arr.reduce((item, next) => ((hash[next] ? "" : hash[next] = true) && item.push(next), item), [])
// console.log(arr);


var arr4 = [1, 2, 3, 4, 5, 6];
arr4 = arr4.reduce((pre, curValue, index) => ((curValue === 1) && pre.push(curValue) && pre), [])
console.log(arr4);

var arr5 = [1, 2, 4, 6, 2, 4];
arr5 = arr5.reduce((pre, value, index) => pre.push(value) && pre, [])
console.log(arr5);