// I have a transaction Array, I want to create a new Array with just the transaction IDs
const transactions = [{
    id: "credit001",
    amount: 100,
    type:"credit"
}, {
    id: "debit001",
    amount: 80,
    type:"debit"
}, {
    id: "credit002",
    amount: 120,
    type:"credit"
}]
const ans=transactions.filter((user)=>user.type=='credit')
console.log(ans)


//create your own .myfilter()
// Check if the function exists, if not, write custom implementation
if(!Array.prototype.myfilter){
    Array.prototype.myfilter=function(callback){
        //1.if callback is not a function then throw error
        if(typeof callback !=='function'){
            throw new TypeError("pls pass function")
        }
        //2.create a new array
        const result=[]
        //3.Iterate over the array and run the callback, push the value in the result
        for(let i=0;i<this.length;i++){
            //check if index value is not empty
            //it prevent from sparse array containing empty value
            if(i in this){
                const condition=callback(this[i],i,this)
                //4.Push the value this[i] in the result Array,if codition is true
                if(condition){
                    result.push(this[i])
                }
            }
        }
        return result
    }
}
const ans2=transactions.myfilter((user)=>user.type=='credit')
console.log(ans2)