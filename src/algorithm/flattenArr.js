//方法1
// function flattenArray(arr) {
//     const resultArr = [];
//     for (const item of arr) {
//         if (Array.isArray(item)) {
//             resultArr.push(...flattenArray(item));
//         } else {
//             resultArr.push(item);
//         }
//     }
//     return resultArr;
// }

// const nestedArray = [1, [2, [3, [4]], 5]];
// console.log(flattenArray(nestedArray));

//方法2
function flattenArray(arr) {
    return arr.reduce((accumulator, curItem) => {
        if (Array.isArray(curItem)) {
            return accumulator.concat(...flattenArray(curItem));
        } else {
            return accumulator.concat(curItem);
        }
    }, []);
}

const nestedArray = [1, [2, [3, [4]], 5]];
console.log(flattenArray(nestedArray));
