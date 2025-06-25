const accept=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("order accepted")
    },1000)
})
const processed=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("order processed")
    },1000)
})
const served=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("order served")
    },1000)
})
const bill=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("order bill")
    },1000)
})
async function order(string){
    if(string==="coffee"){
        try {
            let a=await accept
            console.log(a)
            let b=await processed
            console.log(b)
            let c=await served
            console.log(c)
            let d=await bill
            console.log(d)
        } catch (error) {
            console.log(error)
        }
    }else{
        console.log("sorry only coffee")
    }
}
order("coffee");
order("tea");

