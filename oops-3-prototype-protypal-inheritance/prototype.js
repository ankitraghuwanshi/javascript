//1.array also object
const arr=[1,2,3,4,5]
console.log(arr)           //prototype object attached

//2.function also object
function greet() {
  console.log("Hello!");
}
greet.language = "English";
console.log(greet.language);      //English

//3.object
const person={
    name:"john"
}
console.log(person)      //prototype object attached
console.log(person.hasOwnProperty('name'))      //true
console.log(person.hasOwnProperty('toString'))  //false

//4.prototype example with displayinfo()
function CarOld(model,year){
    this.model=model;
    this.year=year;

    this.dispalyInfo=function(){
        console.log(`model=${this.model}, year=${this.year}`)
    }
}
const car=new CarOld('safari',2025)
console.log(car)
car.dispalyInfo()


//5.optimization if 1000 car are made (adding displayInfo to CarNew.prototype)
function CarNew(model,year){
    this.model=model;
    this.year=year;
}
CarNew.prototype.dispalyInfo = function(){
                                console.log(`model=${this.model}, year=${this.year}`)
                            }
const car1=new CarNew('nexon.ev',2026)
console.log(car1)
car1.dispalyInfo()

// //6.adding displayInfo to the root Object.prototype
// function CarNew2(model,year){
//     this.model=model;
//     this.year=year;
// }
// Object.prototype.dispalyInfo = function(){
//                                 console.log(`model=${this.model}, year=${this.year}`)
//                             }
// const car2=new CarNew2('harrier.ev',2027)
// console.log(car2)
// car2.dispalyInfo()
// //note:we never use 6th method i.e. Object.prototype 
// //because it add property to the root object and 
// //if we create new object (person) then person also get unknown/not-required property in root prototype
// const Person={
//     name:"batman"
// }
// console.log(person)
// //or if we create array then array also get unknown/not-required property in root prototype
// const ar=[1,2,3]
// console.log(ar)