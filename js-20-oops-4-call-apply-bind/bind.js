const person1= {
    name: "Bruce Wayne",
    age: 34, 
    printNameAndAge: function(location) {
        console.log(`Name is ${this.name} and age is ${this.age}, residing at ${location}`)
    },
}
const person2={
    name: "Selina Kyle",
    age: 29
}

//Call & Apply both executes the function and returns whatever the function is returning
//Bind will not call the function, it simply returns a new function that remembers the context
const printNameAndAgeBatman = person1.printNameAndAge.bind(person1)

printNameAndAgeBatman("gotham")         // same as person1.printNameAndAge("gotham")

const printNameAndAgeCatwoman = person1.printNameAndAge.bind({
    name: "Selina Kyle",
    age: 29
},"bhopal")

printNameAndAgeCatwoman()       //same as person1.printNameAndAge.call(person2,"bhopal")