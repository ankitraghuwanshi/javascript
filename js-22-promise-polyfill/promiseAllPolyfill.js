function fetchUserData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("fetch-user-data resolved")
        },1000)
    })
}
function fetchProductData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("fetch-product-data resolved")
        },2000)
    })
}
function fetchProfileData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("fetch-profile-data resolved")
        },3000)
    })
}

//stores value of resolved promise in array
//if any reject then return 
Promise.myall =function(promises){
    return new Promise((res,rej)=>{
        const resultArray=[]  
        let total=0   //count how many promises resolved
        promises.forEach((promise,index)=>{
            Promise.resolve(promise).then((resolvedValue)=>{
                resultArray[index]=resolvedValue
                total=total+1

                //after last promise in array 
                if(total === promises.length){
                    res(resultArray)
                }
            }).catch((e)=>{
                rej(e)
            })
        })
    })
}

Promise
.myall([fetchUserData(),fetchProductData(),fetchProfileData()])
.then((val)=>{console.log(val)})
.catch((e)=>{console.log(e)})

//problem
// Promise
// .myall([1,2,3])
// .then((val)=>{console.log(val)})
// .catch((e)=>{console.log(e)})
//promise.then is not a function

//so solution
//Promise.resolve()
//it will create promise,from passed value

//now
Promise
.myall([1,2,3])
.then((val)=>{console.log(val)})
.catch((e)=>{console.log(e)})
//print [1,2,3]