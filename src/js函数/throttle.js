//简单
// function throttle(func, waitTime) {
//     let lastTime = 0;
//     return function (...args) {
//         const now = Date.now();
//         if (now - lastTime >= waitTime) {
//             lastTime = now;
//             func.apply(this, args);
//         }
//     };
// }

//复杂
function throttle(func, waitTime, options = {}) {
    let lastExecutionTime = 0;
    let lastArgs;
    let lastThis;
    let timeoutId = null;

    const { leading = true, trailing = true } = options;

    function invokeFunc() {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
        lastExecutionTime = Date.now();
        func.apply(lastThis, lastArgs);
        lastArgs = lastThis = null;
    }

    function throttled() {
        const nowTime = Date.now();
        if (!lastExecutionTime && !leading) {
            //首次执行不需要立马执行，把执行函数最新时间设置为当前时间
            lastExecutionTime = nowTime;
        }
        //下一次执行函数的剩余时间
        const remaining = waitTime - (nowTime - lastExecutionTime);
        if (remaining <= 0 || remaining > waitTime) {
            invokeFunc();
        } else if (!timeoutId && trailing) {
            timeoutId = setTimeout(() => {
                invokeFunc();
            }, remaining);
        }
    }
    return throttled;
}

//请求函数
function requset(val) {
    console.log("request: ", val);
}

let inputEl = document.getElementById("input");

let throttleInput = throttle(requset, 1000);

inputEl.addEventListener("keyup", function (e) {
    throttleInput(e.target.value);
    // throttleInput(e.target.value);
});
