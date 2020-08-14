function a() {
    return new Promise((resolve, reject) => {

        console.log("a");
        resolve(5);
        // setTimeout(() => {
        //     resolve("test");
        // }, 1000)
    })
}

function b() {
    return new Promise((resolve, reject) => {
        console.log("b");
        resolve(2);
    })
}

function c() {
    return new Promise((resolve, reject) => {
        console.log("c");
        reject(1);
    })
}



/*
 *--------------------------Promise.all--------------------------------
 */
Promise.all([a(), b(), c()])
    .then(([x, y]) => {
        console.log(x, y);
    }).catch(res => {
        console.log("res", res);
    });


/*
 *--------------------------Promise.race  reject --------------------------------
 */
Promise.race([a(), b(), c()])
    .then((success) => {
        console.log(success);
    }).catch(res => {
        console.log("res", res);
    });