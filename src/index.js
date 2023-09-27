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

const scroll = function () {
    console.log("滚动");
};

const throttleScroll = throttle(scroll, 2000);

window.addEventListener("scroll", throttleScroll);
