var minLength = function (s) {
    const stack = [];
    for (const ch of s) {
        if (
            (stack.length && stack[stack.length - 1] === "A" && ch === "B") ||
            (stack.length && stack[stack.length - 1] === "C" && ch === "D")
        ) {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }
    return stack.length;
};

console.log(minLength("ABBBCD"));
