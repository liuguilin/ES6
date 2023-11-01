const isObject = (obj) => {
    const type = typeof obj;
    return obj !== null && (type === "object" || type === "function");
};

const getObjectType = (obj) => {
    return Object.prototype.toString.call(obj);
};

// 可遍历类型
const arrType = "[object Array]";
const objType = "[object Object]";
const mapType = "[object Map]";
const setType = "[object Set]";
const argType = "[object Arguments]";

// 不可遍历
const boolType = "[object Boolean]";
const numType = "[object Number]";
const strType = "[object String]";
const dateType = "[object Date]";
const errType = "[object Error]";
const regexpType = "[object Regexp]";
const symbolType = "[object Symbol]";
const funType = "[object Function]";

// 将可遍历类型做个集合
const traverseTypes = [arrType, objType, mapType, setType, argType];

const deepClone = (obj, map = new Map()) => {
    if (!isObject(obj)) {
        // 如果不是对象直接返回
        return obj;
    }

    // 获取当前参数的对象类型
    const objType = getObjectType(obj);
    console.error("objType = ", objType);
    // 根据constructor找到原始构造器，创建初始化对象
    let obj_ = new obj.constructor();
    if (map.has(obj)) {
        // 之前有拷贝过吗？
        return map.get(obj);
    }
    const copyObj = Array.isArray(obj) ? [] : {};
    map.set(obj, copyObj);
    for (const i in obj) {
        copyObj[i] = deepClone(obj[i], map);
    }
    return copyObj;
};

const fn = () => {};

console.error(typeof fn === "object");

const person = {
    age: 25,
    name: "jeryliu",
    isKtv: new Boolean(true),
    map: new Map(),
    fun: new Function(),
    fn: () => {
        console.log(1111);
    },
    other: {
        gender: "male",
        arr: [{ test: "1" }, 2, 3, 4],
    },
    test: null,
};
person.person = person;

const newPerson = deepClone(person);
person.name = "jeck";
person.other.gender = "F";
person.other.arr[0].test = "222";
console.log(newPerson, person);
