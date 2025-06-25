const toys={
    toy1:{name:"teddy bear",color:"brown"},
    toy2:{name:"race car",color:"red"},
    toy3:{name:"doll",color:"pink"}
}

const objectToString=JSON.stringify(toys)
console.log(objectToString)

const stringToObject=JSON.parse(objectToString)
console.log(stringToObject)