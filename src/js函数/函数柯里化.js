function add(...args) {
    const fn = function (...newArgs) {
        return add(...args, ...newArgs);
    };

    fn.sum = function () {
        return args.reduce((pre, cur) => {
            return pre + cur;
        });
    };

    return fn;
}

// console.log(add(1)); // 10
console.log(add(1)(4).sum()); // 5
console.log(add(2, 3)(4).sum()); // 9
