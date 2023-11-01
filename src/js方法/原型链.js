function SupClass(name, age) {
    this.name = name;
    this.age = age;
}

function SubClass(name) {
    console.log(this);
    this.name = name;
    // SupClass.call(this, name);
}

SubClass.prototype = new SupClass("xiaoming", 18);
SubClass.prototype.constructor = SubClass;

const sub1 = new SubClass("xiaozhang");
const sub2 = new SubClass("xiaohong");

console.log(sub1.name, sub2.name);
