function Pizza(topping,size,crust){
    this.topping=topping;
    this.size=size;
    this.crust=crust;
    this.discribe=function(){
        console.log(`this pizza has size "${this.size}" and "${this.crust}" crust with "${this.topping}" topping`)
    }
}
const pizza1=new Pizza("capsicum","M","thin")
console.log(pizza1)
pizza1.discribe()
const pizza2=new Pizza(['capsicum',"cheese","paneer","onion"],"L","pan")
console.log(pizza2)
pizza2.discribe()

//when we hover over Pizza,it says
//"this constructor function may be coverted to a class declaration"
//means this method is a old method and new method is using classes(2015)

//classes is syntactic sugar of constructor function
//means they both work same but have different syntax 
