//before ES6 array.map() not present

//suppose a browser doesn't have call
//then make .mycall() just like .call()

const person1 = {
    name: "Bruce Wayne",
    age: 34, 
    printNameAndAge: function(location) {
        console.log(`Name is ${this.name} and age is ${this.age}, residing at ${location}`);
    }
}
const person2 = {
    name: "Selina Kyle",
    age: 29,
}
//person1.printNameAndAge.call(person2,"bhopal")

Function.prototype.mycall = function(context,...args){
    if(typeof this !== 'function'){
        throw new Error("must call on function please")
    }

    //this work like--  person2.printNameAndAge = printNameAndAge
    context.myfunction=this
    
    //this work like--  person2.printNameAndAge(..args)
    context.myfunction(...args)
}
person1.printNameAndAge.mycall(person2,"bhopal")