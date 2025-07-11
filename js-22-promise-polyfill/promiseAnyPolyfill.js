// Whenver the first resolution happens, resolve Promise.any
// But if all rejects, then reject promise.any

Promise.myAny = function (promises) {
    return new Promise((res, rej) => {
        const rejectionArray = []
        let rejectCount = 0

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(res)    //.then((val)=>{res(val)}) === .then(res)
            .catch((err) => {
                rejectionArray[index] = err
                rejectCount = rejectCount + 1

                if(rejectCount === promises.length) {
                    rej(new AggregateError(rejectionArray, "All promises are rejected"))
                }
            })
        })
    })
}

function fetchUserData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("Error")
            res("User data fetched successfully")
        }, 3000)
    })
}

function fetchProductData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("Product data error!")
        }, 2000)
    })
}

function fetchProfileData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            // rej("Error")
            res("Profile data fetched successfully")
        }, 5000)
    })
}

Promise.myAny([fetchUserData(), fetchProductData(), fetchProfileData()]).then((val) => {
    console.log(val)
}).catch((e) => {
    console.log(e)
})
