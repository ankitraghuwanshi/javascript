//1.modal popup with toggle
const addBtn=document.querySelector(".add-btn")
const modalCont=document.querySelector(".modal-cont")
const mainCont=document.querySelector(".main-cont")
const textArea=document.querySelector(".textArea-cont")

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

//function to add a new ticket/task
function createTicket(){
    //create a new ticket container element
    const ticketCont=document.createElement("div")

    //set class as ticket-cont
    ticketCont.setAttribute("class","ticket-cont")

    //provide innerHtml to ticketCont
    ticketCont.innerHTML=`
        <div class="ticket-color"></div>
        <div class="ticket-id">123456</div>
        <div class="task-area">text area</div>
        <div class="ticket-lock">
            <i class="fa-solid fa-lock"></i>
        </div>
    `
    //append ticket inside main
    mainCont.appendChild(ticketCont)
}

modalCont.addEventListener('keydown',function(e){
    //if we press shift button on modal then ticket generate
    if(e.key=='Shift'){
        createTicket()
        //modal hide
        modalCont.style.display="none"
        addTaskFlag=!addTaskFlag
        //textarea as empty
        textArea.value=""
    }
})