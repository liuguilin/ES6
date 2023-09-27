//1、正则
function getUrlParameter1(name, url) {
    var reg = new RegExp("(\\?|&|#)" + name + "=([^?|&|#]*)(\\?|&|#|$)");
    var m = (url || window.location.href).match(reg);
    return decodeURIComponent((m && m[2]) || "");
}

console.log(
    getUrlParameter1(
        "abtest",
        "https://kg.qq.com?frompage=live&abtest=测试&abtest=测试2#test=1"
    )
);

//方法2
function getUrlParameter2(urlStr, name) {
    const url = new URL(urlStr);
    const queryString = url.search.substring(1);
    const queryParams = queryString.split("&");
    for (const item of queryParams) {
        const [key, value] = item.split("=");
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return "";
}

console.log(getUrlParameter2("https://example.com/?foo=bar&baz=qux", "foo"));

//方法3
function getUrlParameter3(name) {
    var params = URLSearchParams(window.location.search);
    return params.get(name);
}
