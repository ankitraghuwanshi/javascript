//node.js and non-strict mode
//whatever code we write till now is non-strict mode

//scenerio-1
//this==gobal
//console.log(this)
//{}

//scenerio-2
//global object for execution a function on its own
//print global object
// function test(){
//     console.log(this)
// }
// test()

//scenerio-3
//running a function on an object
// const obj={
//     name:"Ankit",
//     test:function(){
//         //print entire obj object
//         console.log(this)
//         //print Ankit
//         console.log(this.name)
//     }
// }
// obj.test()

//for example-1 on object
// const nestedObj={
//     topValue:10,
//     inner:{
//         innerValue:20,
//         testFn:function(){
//             //print undefined (it will print undefined for all variable, like this.blah also)
//             console.log(this.topValue)
//             //print 10
//             console.log(nestedObj.topValue)
//             //print inner object
//             console.log(this)
//         }
//     }
// }
//this will print inner object
//on which object this is being call (inner so this will print inner object)
//nestedObj.inner.testFn()

//example-2
// const obj={
//     inner:{
//         test:function(){
//             //print undefined
//             console.log(this.whatever)
//         }
//     }
// }
// obj.inner.test()

//scenerio-4
//what if we nest a function inside an object and run it independently
// const obj2={
//     prop:"prop",
//     outerFn:function(){
//         //this will print obj2
//         console.log("outer",this)
//         var innerFn=function(){
//             //this will print global object, because of nested function, its running on its own
//             console.log("inner",this)
//         }
//         innerFn()
//     }
// }
// obj2.outerFn()

//example from chatgpt
// function show() {
//   console.log(this);
// }

// const obj = {
//   show: show
// };

// show();        // How? Called as a plain function → this = window (or undefined in strict mode)
// obj.show();    // How? Called as a method of obj → this = obj

//example-2 by chatgpt
// const user = {
//   name: "Alex",
//   greet: function () {
//     console.log(this.name);
//   }
// };

// const greetFunc = user.greet;

// greetFunc();         // How? Plain function call → this = window (or undefined)
// user.greet();        // How? Method call → this = user

