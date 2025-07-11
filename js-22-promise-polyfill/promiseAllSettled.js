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
.allSettled([fetchUserData(),fetchProductData(),fetchProfileData()])
.then((val)=>{console.log(val)})
//note:-no use of catch

//note: it gives status and value, like
//{ status: 'fulfilled', value: 'fetch-profile-data resolved' }

//so
// Combinator	                   Resolves When	                  Rejects When
//Promise.allSettled()	          All promises settle	             Never rejects