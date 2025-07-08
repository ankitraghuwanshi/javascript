function A() {}
function B() {}

let a = new A()
let b = new B()
//don't do this 
A.prototype = b
B.prototype = a

console.log(a, b)
