//if api take longer time then .race() will reject promise and give
function fetchUserData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("fetch-user-data resolved")
        },9000)
    })
}
function maxTimeout() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("Timeout")
        }, 5000)
    })
}
Promise
.race([fetchUserData(),maxTimeout()])
.then((val)=>{console.log(val)})
.catch((e)=>{console.log(e)})