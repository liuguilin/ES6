let obj = new Map();

var arr = [1, 2, 3, 4, 5, 6, 7, 4, 4, 6, 7];

arr = arr.filter(
    (item) => item === 7 || (!obj.has(item) && obj.set(item, true))
);

// console.log(arr);

var arr2 = [1, 2, 4, 6, 7, 10, 1, 2, 4, 6];

arr2 = arr2.filter((value, index, array) => {
    console.log(value);
    console.log(index);
    console.log(array);
});

console.log(arr2);