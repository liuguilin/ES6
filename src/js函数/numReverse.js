function numReverse(num) {
    return (
        Math.abs(num)
            .toString()
            .split(".")
            .map((item) => item.split("").reverse().join(""))
            .join(".") * (num > 0 ? 1 : -1)
    );
}

console.log(numReverse(-123.456));
