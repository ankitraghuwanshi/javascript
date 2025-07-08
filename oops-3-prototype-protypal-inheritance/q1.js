// What happens when we explicitly set __proto__ to null

const car = {
    make: "Tesla",
    year: 2020
}

// Earlier this was Object()
car.__proto__ = null

console.log(car)
console.log(car.hasOwnProperty("make"))
