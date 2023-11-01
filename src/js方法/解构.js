//1.完全解构
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);

let [head, ...tail] = [1, 2, 3, 4];

//不完全解构
let [x, y] = [1, [2], 3];
console.log(x, y);


let { foo, bar } = { foo: 'aaa', bar: 'bbb' };

console.log(foo);