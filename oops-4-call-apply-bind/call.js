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
person1.printNameAndAge.call(person2, "bhopal")

//problem:-if we have many argument, then it is very hectic to manage aruments 
//solution: .apply() 