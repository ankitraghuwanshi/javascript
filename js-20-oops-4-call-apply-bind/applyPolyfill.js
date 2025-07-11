const person1 = {
    name: "Bruce Wayne",
    age: 34,
    sum: function (num1, num2, num3, num4, num5) {
        console.log(num1 + num2 + num3 + num4 + num5)
    }
}
const person2 = {
    name: "Selina Kyle",
    age: 29,
}
const args = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
person1.sum.apply(person2, args)

Function.prototype.myapply = function(context,args){ //because of apply receive (context,array)
    if(typeof this !== 'function'){
        throw new Error("please apply on function")
    }

    //same as:- person2.sum=sum 
    context.myfunction=this

    //same as:- person2.sum(...args)
    context.myfunction(...(args || [])) //means spread args ,if not pass then spread empty array
}
person1.sum.myapply(person2, args)