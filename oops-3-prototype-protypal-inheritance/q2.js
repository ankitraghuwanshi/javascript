// If 
// Object.prototype.method = function() {} 
// is defined,
// how does it affect new and existing objects?
// Why might this be a bad practice?


//answer--> It will create it for every object/array/fn which might not be the intention.
//means method add at root object prototype 
//means for array/function array object also
