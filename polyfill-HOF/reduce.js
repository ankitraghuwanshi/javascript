// const result = array.reduce((accumulator, currentValue, index, array) => {
//   // return updated accumulator
// }, initialValue);

const arr=[1,2,3,4,5]
const ans=arr.reduce((acc,num,i,arr)=>(acc+num),0)
console.log(ans)

if(!Array.prototype.myreduce){
    Array.prototype.myreduce=function(callback,initialValue){
        // Step1: Check for invalid callback value
        if(typeof callback !== "function"){
            throw new Error("please function call")
        }

        //step2: If initialValue is empty, make sure there are values in the Array
        if(!initialValue && this.length < 1) {
            return new TypeError("Array must have values if initialValue is empty")
        }

        //Step3: Initialize the accumulator, and keep track of the initial loop value

        //if initialValue is present then accumulator will be initialvalue,else this[0]
        let accumulator=initialValue?initialValue:this[0]
        
        //if initialValue is present then startindex will be 0,else 1
        let startIndex=initialValue?0:1

        for(let i=startIndex;i<this.length;i++){
            if(i in this){
                accumulator=callback(accumulator,this[i],i,this)
            }
        }
        return accumulator
    }
}
const ans2=arr.myreduce((acc,num)=>(acc+num))
console.log(ans2)

//Homework
//Other Higher Order funtions to write polyfill for
// .find, .findIndex