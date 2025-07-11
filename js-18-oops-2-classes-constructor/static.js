class Pizza{
    //variable only for class (call using Pizza.totalPizzasMade)
    static totalPizzasMade=0;

    constructor(topping,size,crust){
        this.topping=topping;
        this.size=size;
        this.crust=crust;
        //whenver we access static properties of classes
        //we always need to access it like classname.propertyname (Pizza.totalPizzasMade)
        Pizza.totalPizzasMade++;
    }
    describe(){
        console.log(`this pizza has size "${this.size}" and "${this.crust}" crust with "${this.topping}" topping`)
    }

    //function only for class (call using Pizza.returnTotalPizzasMade())
    static returnTotalPizaasMade(){
        //console.log(`total pizzas made is ${Pizza.totalPizzasMade}`)
        return `total pizzas is ${Pizza.totalPizzasMade}`
    }

    static hello(){
        console.log("hello")
    }
}

const p1=new Pizza('capsicum','m','thin','garlic')
const p2=new Pizza(['capsicum','paneer'],'L','thin','garlic')

//static keyword use as variable for class (not for object)
//static variable of class(global variable)
console.log(Pizza.totalPizzasMade)
console.log(Pizza.returnTotalPizaasMade())
Pizza.hello()