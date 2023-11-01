/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();
    for (let str of strs) {
        let strArr = Array.from(str);
        strArr.sort();
        let key = strArr.toString();
        let list = map.get(key) || new Array();
        list.push(str);
        map.set(key, list);
    }
    return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
