// Resolve/reject with whichever promise is resolved or rejected first

Promise.myrace=function(promises){
    return new Promise((res,rej)=>{
        promises.forEach((promise)=>{
            Promise.resolve(promise)  //convert non-promise to promise
            .then(res)
            .catch(rej)
        })
    })
}