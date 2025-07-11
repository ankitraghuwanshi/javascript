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
        },1000)
    })
}
function fetchProfileData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("fetch-profile-data resolved")
        },1000)
    })
}

Promise
.race([fetchUserData(),fetchProductData(),fetchProfileData()])
.then((val)=>{console.log(val)})
.catch((e)=>{console.log(e)})

//so
// Combinator	              Resolves When	                      Rejects When
//Promise.race()	          First settles	                First settles (resolve or reject)

//use-case of .race(),  apiTimeout case