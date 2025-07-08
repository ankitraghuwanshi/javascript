// What happens when we explicitly set __proto__ to null

const carObj = {
    make: "Tesla",
    year: 2020
}

// Earlier this has Object()
carObj.__proto__ = null
//but now carObj root object prototype is gone(null)

console.log(carObj)
//console.log(carObj.hasOwnProperty("make"))      //error
