//homework
//{ status: 'fulfilled', value: 'fetch-product-data resolved' }
//{ status: 'rejected', reason: 'fetch-profile-data resolved' }
Promise.myallsettled =function(promises){
    return new Promise((res,rej)=>{
        const resultArray=[]  
        let total=0   //count how many promises resolved
        promises.forEach((promise,index)=>{
            Promise.resolve(promise)
            .then((val)=>{
                resultArray[index]={ status: 'fulfilled', value: val }
                total=total+1
                if(total===promises.length){
                    res(resultArray)
                }
            }).catch((e)=>{
                resultArray[index]={ status: 'rejected', reason: e }
                total=total+1
                if(total===promises.length){
                    res(resultArray)
                }
            })
        })
    })
}
// Homework, given a list/array of promises,
// implement a function which triggers these promises 1-by-1,
//  when the first promise gets resolved,
//  only then trigger the second promise....if there's any rejection in this chain,
//  then immediately reject