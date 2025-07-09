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
//Instead of passing the arguments normally like a function,
// you can simply pass the array of arguments
//apply wil discard extra arguments 
person1.sum.apply(person2, args)


//Q1.You have received an array of numbers,
// And you need to calculate the max of them
// Use Math.max()
const nums = [10, 20, 30, 40, 50, 60]
//way-1
console.log(Math.max.apply(undefined, nums))

//way-2
//Spread operator (...)
// When used in a fn, a spread operator on an array
// Will convert the array into a bunch of comma separated arguments
console.log(Math.max(...nums))


// Rest operator (opposite of spread operator)
// WHen used in fn definition, it converts the function arguments into array
// Whenever you want to accept a dynamic number of arguments

function test(...args) {
    console.log(args)       //print [10,12,13] 
}
test(10, 12, 13)
