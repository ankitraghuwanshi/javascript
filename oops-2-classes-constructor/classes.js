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
const pizza1=new Pizza("capsicum","M","thin")
console.log(pizza1)
pizza1.describe()