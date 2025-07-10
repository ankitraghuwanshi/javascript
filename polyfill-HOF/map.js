// I have a transaction Array, I want to create a new Array with just the transaction IDs
const transactions = [{
    id: "credit001",
    amount: 100
}, {
    id: "debit001",
    amount: 80
}, {
    id: "credit002",
    amount: 120
}]
const ans=transactions.map((user)=>user.id)
console.log(ans)

//create your own .mymap()
// Check if the function exists, if not, write custom implementation
if(!Array.prototype.mymap){
    Array.prototype.mymap=function(callback){
        //1.if callback is not a function then throw error
        if(typeof callback !=='function'){
            throw new TypeError("pls pass function")
        }
        //2.create a new array
        const result=[]
        //3.Iterate over the array and run the callback, add the value in the result
        for(let i=0;i<this.length;i++){
            //check if index value is not empty
            //it prevent from sparse array containing empty value
            if(i in this){
                const mappedValue=callback(this[i],i,this)
                //4.Push the new mappedValue into the final Array
                result[i] = mappedValue
            }
        }
        return result
    }
}
const ans2=transactions.mymap((user)=>user.id)
console.log(ans2)


//sparse array
const arr=[1,2]
arr[6]=100
//arr=[1, 2, empty, empty, empty, empty, 100]
console.log(2 in arr)  //false
console.log(6 in arr)  //true
console.log(0 in arr)  //true