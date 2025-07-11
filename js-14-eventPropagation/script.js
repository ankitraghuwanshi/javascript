const decrement=document.querySelector("#decrement")
const increment=document.querySelector("#increment")
const reset=document.querySelector("#reset")
const count=document.querySelector("#count")
const auto=document.querySelector("#auto")

let counter=0
let autoFlag=false
let timer=null

decrement.addEventListener('click',()=>{
    if(counter>0){
        counter=counter-1
        count.innerText=counter
    }
})
increment.addEventListener('click',()=>{
    counter=counter+1
    count.innerText=counter
})
reset.addEventListener('click',()=>{
    counter=0
    count.innerText=counter
})

// When I click on Auto
// 1. Auto button should become active (green)
// 2. All other buttons should be disabled
// 3. Counter should increase by 1 every second.
// 4. When I click on auto again, then everything should reset
auto.addEventListener('click',()=>{
    autoFlag=!autoFlag
    if (autoFlag) {
        increment.classList.add("disabled")
        decrement.classList.add("disabled")
        reset.classList.add("disabled")
        auto.classList.add("auto")
        timer=setInterval(()=>{
            counter=counter+1
            count.innerText=counter
        },1000)
    } else {
        increment.classList.remove("disabled")
        decrement.classList.remove("disabled")
        reset.classList.remove("disabled")
        auto.classList.remove("auto")
        counter=0
        count.innerText=counter
        //if timer has value then clear it
        if(timer){
            clearInterval(timer)
        }
    }
})