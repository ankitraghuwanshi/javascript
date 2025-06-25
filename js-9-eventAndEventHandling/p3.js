//for removeAll button
const specialBtn=document.querySelector("#removeAll")
const ul=document.querySelector("ul")
specialBtn.addEventListener("click",()=>{
    ul.remove()
})
//for task delete button
const allBtn=document.querySelectorAll(".delete_button")
for(let i=0;i<allBtn.length;i++){
    const currentBtn=allBtn[i]
    currentBtn.addEventListener('click',()=>{
        currentBtn.parentElement.remove()
    })
}