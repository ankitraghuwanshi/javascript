class Car{
    constructor(model,year){
        this.model=model;
        this.year=year;
    }
    dispalyInfo(){
        console.log(`model=${this.model}, year=${this.year}`)
    }
}
const c=new Car('creata',2026)
console.log(c)
//car.dispalyInfo()