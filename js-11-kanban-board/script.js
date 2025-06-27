//1.modal popup with toggle
const addBtn=document.querySelector(".add-btn")
const modalCont=document.querySelector(".modal-cont")
//let over const
let addTaskFlag=false
addBtn.addEventListener('click',function(){
    //sawp the addTaskFlag
    addTaskFlag = !addTaskFlag
    if(addTaskFlag==true){
        //show modal-cont
        modalCont.style.display="flex"
    }else{
        //hide modal-cont
        modalCont.style.display="none"
    }
})