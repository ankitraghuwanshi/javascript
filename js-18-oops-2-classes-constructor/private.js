class Pizza{
    //private properties
    #secretIngredient;
    constructor(topping,size,crust){
        this.topping=topping;
        this.size=size;
        this.crust=crust;
        this.#secretIngredient="pineapple";
    }
    describe(){
        console.log(`this pizza has size "${this.size}" and "${this.crust}" crust with "${this.topping}" topping`)
    }
}
const pizza1=new Pizza("capsicum","M","thin")
const pizza2=new Pizza(["capsicum","paneer"],"M","thin")
//console.log(pizza1.#secretIngredient)
//syntaxError

