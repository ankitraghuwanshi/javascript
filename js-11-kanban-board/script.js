//1.modal popup with toggle
const addBtn=document.querySelector(".add-btn")
const modalCont=document.querySelector(".modal-cont")
const mainCont=document.querySelector(".main-cont")
const textArea=document.querySelector(".textArea-cont")
const allPriorityColors=document.querySelectorAll(".priority-color")
//let over const
let addTaskFlag=false
let modalPriorityColor="lightpink"

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
function createTicket(ticketColor){
    //create a new ticket container element
    const ticketCont=document.createElement("div")

    //set class as ticket-cont
    ticketCont.setAttribute("class","ticket-cont")

    //provide innerHtml to ticketCont
    ticketCont.innerHTML=`
        <div class="ticket-color" style="background-color:${ticketColor};"></div>
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
        //pass in the required fields to create create ticket
        createTicket(modalPriorityColor)
        //modal hide
        modalCont.style.display="none"
        addTaskFlag=!addTaskFlag
        //textarea as empty
        textArea.value=""
    }
})

//add event listener on all the priority colors in the modal
allPriorityColors.forEach(function(colorElem){
    colorElem.addEventListener('click',function(){
        //remove active class from all priority-color-cont child
        allPriorityColors.forEach(function(colorElemCurrent){
            colorElemCurrent.classList.remove("active")
        })

        //add active class to selected color
        colorElem.classList.add("active")

        //implement logic to assign the selected color to the task
        modalPriorityColor=colorElem.classList[0]
    })
})