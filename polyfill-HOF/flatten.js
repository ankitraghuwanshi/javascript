const arr = [1, [2, 3, [4, 5, 6, 7, 8]]] // n-D Array/ Infinitely nested Array to
// [1, 2, 3, 4, 5, 6, 7, 8] // 1 D array
const arr2=arr.flat(2)
console.log(arr2)

function flattenArray(array) {
    return array.reduce((accumulator, currentElem) => {
        // If the current ELement is an Array, do something
        if (Array.isArray(currentElem)) {
            // innerFlattenedArray is an 1D array
            const innerFlattenedArray = flattenArray(currentElem)
            accumulator.push(...innerFlattenedArray)
            // [1, 2, 3] => acc.push(...[1, 2, 3]) => acc.push(1, 2, 3)
        } else {
        // If the current elemnt is not an array, simply push it to my acc
            accumulator.push(currentElem)
        }
        return accumulator
    }, [])
}

const arr3=flattenArray(arr)
console.log(arr3)

//homework
// Add a second argument to myFlatten,
// which will stop the recursion at that level. If don't pass anything,
// it will only run till the first level