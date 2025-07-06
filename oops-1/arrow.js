//"use strict";

//1.print {} for both strict and non-strict
// const func = ()=>{
//     console.log(this)
// }
// func()

//2.print still {} for both strict and non-strict
// const obj={
//     name:"john",
//     func:()=>{
//         console.log(this)
//     }
// }
// obj.func()

//3.print {name:"whatever"}
// this.name="whatever"
// const obj={
//     prop:"prop",
//     func:()=>{
//         console.log(this)
//     }
// }
// obj.func()

//3.2 --->print {}
// const obj={
//     prop:"prop",
//     func:()=>{
//         console.log(this)
//     }
// }
// obj.func()

//4.print {name:"whatever"}
// this.name="whatever"
// const outer={
//     top:"prop1",
//     inner:{
//         inner:"prop2",
//         func:()=>{
//             console.log(this)
//         }
//     }
// }
// outer.inner.func()

//4.2 --print {}
// const outer={
//     top:"prop1",
//     inner:{
//         inner:"prop2",
//         func:()=>{
//             console.log(this)
//         }
//     }
// }
// outer.inner.func()