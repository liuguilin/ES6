//函数绑定
function bind(fn, context) {
    var args = Array.prototype.slice.call(arguments, 2);
    return function () {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(context, finalArgs);
    };
}

function test(c, d, e, f, g) {
    return this.a + this.b + c + d + e + f + g;
}
console.log(bind(test, { a: 2, b: 3 }, 1, 2, 3)(4, 5));

//函数柯里化
function curry(func) {
    console.log("func", func.length);
    return function curried(...args) {
        console.log("args", args);
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                console.log("args2", args2);
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

function test2(a, b, c) {
    return 3;
}

console.log("curry =", curry(test2)(1, 2)(3));
