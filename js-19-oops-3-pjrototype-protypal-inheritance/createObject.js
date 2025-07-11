// You want some common function added to the object prototypes
// But you don't want to use constructors/classes
//so

function logTime(){
    console.log(Date.now())
}
//add logTime in obj prototype
const obj=Object.create({logTime})
//add value inside obj object
obj.value=10
console.log(obj)
obj.logTime()

//so
// 3-ways of modifying prototypes

// 1. Constructors -> Car.prototype.somefn = ()
// 2. Class -> Simply use class methods
// 3: One off instances where you want to directly modify prototype -> Object.create()
