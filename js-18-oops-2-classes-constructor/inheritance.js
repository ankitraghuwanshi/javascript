class Pizza{
    constructor(topping,size,crust){
        this.topping=topping;
        this.size=size;
        this.crust=crust;
    }
    describe(){
        console.log(`this pizza has size "${this.size}" and "${this.crust}" crust with "${this.topping}" topping`)
    }
}

//inheritance
class StuffedCrustPizza extends Pizza{
    constructor(topping,size,crust,stuffingType){
        super(topping,size,crust)
        this.stuffingType=stuffingType
    }
    describeStuffing(){
        console.log(`stuffing of ${this.stuffingType}`)
    }
    describe(){
        console.log("i will override over pizza(parent) class")
        super.describe()
    }
}

const p1=new StuffedCrustPizza('capsicum','m','thin','garlic')
//console.log(p1)
p1.describeStuffing()
p1.describe()
p1.describe()