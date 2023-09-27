async function a() {
    return new Promise((resolve, reject) => {
        resolve("a");
    });
}

function b() {
    return new Promise((resolve, reject) => {
        reject("b");
    });
}

async function c() {
    const res = await b().catch((err) => {
        throw new Error(err);
    });
    console.log(11111);
}

function all() {
    return Promise.all([a(), b()])
        .then(([x, y]) => {
            // console.log(x, y);
            return x;
        })
        .catch((err) => {
            console.log("错误信息:", err);
        });
}

async function test() {
    const value = all().then((x) => {
        console.log(x);
    });
    console.log("value", value);
}

// test();
