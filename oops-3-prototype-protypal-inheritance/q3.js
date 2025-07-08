function Cat(name) {
    this.name = name;
}
const fluffy = new Cat("Fluffy");
fluffy.__proto__ = { age: 5 }; // This { age: 5} also has Object prototype


console.log({ age: 5})

console.log(fluffy.age); //5
console.log(fluffy.hasOwnProperty('age')); //false
console.log(fluffy.__proto__ === Cat.prototype); //false
