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

Promise
.any([fetchUserData(),fetchProductData(),fetchProfileData()])
.then((val)=>{console.log(val)})
.catch(()=>{console.log("AggregateError: All promises were rejected")})

//so
// Combinator	              Resolves When	                      Rejects When
//Promise.any()	             First to resolve	                All promises reject