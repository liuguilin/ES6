function debounce(func, waitTime, immdiate) {
    let timeoutId, result;

    var debounced = function (...args) {
        timeoutId && clearTimeout(timeoutId);
        function later() {
            timeoutId = null;
            if (!immdiate) {
                result = func.apply(this, args);
            }
        }

        const callNow = !timeoutId && immdiate;
        timeoutId = setTimeout(later, waitTime);
        if (callNow) {
            result = func.apply(context, args);
        }
        return result;
    };

    debounced.cancel = function () {
        clearTimeout(timeoutId);
        timeoutId = null;
    };

    return debounced;
}

//请求函数
function requset(val) {
    console.log("request: ", val);
}

let inputEl = document.getElementById("input");

let debounceInput = debounce(requset, 1000);

inputEl.addEventListener("keyup", function (e) {
    debounceInput(e.target.value);
    // throttleInput(e.target.value);
});
