const newArray = [3, 4, 5]

Array.prototype.forEach = () => {
    console.log("Oh no! I am not implemented!")
}
console.log(newArray)

newArray.forEach((p) => console.log(p))

const anotherArray = [10, 20, 20]
//it also override over every array 
console.log(anotherArray)

anotherArray.forEach = () => {
    console.log("AM I implemented?")
}

anotherArray.forEach()
//because of chaining "AM I implemented?" print
//it will check first in the top level ,then go downward 