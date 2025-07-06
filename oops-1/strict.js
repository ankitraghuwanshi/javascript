//for strict mode just type
//a.For a whole script:
//"use strict";

// //b.for Inside a function:
// function doSomething() {
//   "use strict";
//   // strict mode only in this function
// }


// //examples:-
// //1. Accidental Global Variable
// function test() {
//   x = 10; // No var/let/const
// }
// test();
// console.log(x); // 10 (in non-strict mode)

// //above example With strict mode:
// "use strict";
// function test() {
//   x = 10; // ReferenceError
// }
// test();


// //2. this in Functions
 
// // Non-strict: `window object` `global object`
// // Strict: `undefined`


// //3. Duplicated Parameters
// function sum(a, a) {
//   return a + a;
// }
// // Non-strict: Allowed
// // Strict: SyntaxError


// //4. Deleting Properties
// "use strict";
//delete Object.prototype;  // TypeError