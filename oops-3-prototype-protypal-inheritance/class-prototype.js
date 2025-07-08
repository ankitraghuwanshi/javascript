class Car{
    constructor(model,year){
        this.model=model;
        this.year=year;
    }
    displayInfo(){
        console.log(`model=${this.model}, year=${this.year}`)
    }
}
const c=new Car('creata',2026)
console.log(c)
//class method is better than function constructor because 
//in class no need to put displayInfo inside Car.prototype ,its already there because of class used