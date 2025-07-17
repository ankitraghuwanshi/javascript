// Flatten nested object
const obj = {
    a: {
        b: 20,
        c: {
            d: 21,
            e: {
                f: 100
            }
        }
    }
}

const flattenObj = (sourceObj, sourceKey, initialObj) => {
    if(typeof sourceObj !== 'object') {
        throw new Error("You need to pass an object")
    }

    Object.keys(sourceObj).map((key) => {
        if(typeof sourceObj[key] == 'object') {
            const finalKey = sourceKey ? `${sourceKey}.${key}` : key
            flattenObj(sourceObj[key], finalKey, initialObj)
        }
        else {
            initialObj[sourceKey] = sourceObj[key]
        }
    }) 

    return initialObj
}

console.log(flattenObj(obj, null, {}))
