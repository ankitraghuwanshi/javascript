function Cat(name) {
    this.name = name;
}
//console.log(Cat.prototype)          //print empty object having constructor and root-prototype

//fluffy object created through Cat constructor function
const fluffy = new Cat("Fluffy");

console.log(fluffy.__proto__ === Cat.prototype);    //true

fluffy.__proto__=null
//console.log(fluffy)

fluffy.__proto__ = { age: 5 };
//console.log({ age:5 })     //it has root-object-prototype
// This { age: 5} remove constructor and add himself,but root prototype is still present


//console.log(fluffy.age);                               //5

//console.log(fluffy.hasOwnProperty('age'));            //false
//above false, 
//because .hasOwnProperty('age) only check if 'age' is present on first/top level or not

//console.log(fluffy.hasOwnProperty('name'));            //true

//console.log(fluffy.__proto__ === Cat.prototype);     //false
