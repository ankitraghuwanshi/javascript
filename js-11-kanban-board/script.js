//1.modal popup with toggle
const addBtn=document.querySelector(".add-btn")
const modalCont=document.querySelector(".modal-cont")
const mainCont=document.querySelector(".main-cont")
const textArea=document.querySelector(".textArea-cont")
const allPriorityColors=document.querySelectorAll(".priority-color")
const removeBtn=document.querySelector(".remove-btn")

//let over const
let addTaskFlag=false
let removeTaskFlag=false
let modalPriorityColor="lightpink"
let ticketID=0

addBtn.addEventListener('click',function(){
    //sawp the addTaskFlag
    addTaskFlag = !addTaskFlag
    if(addTaskFlag){
        //add btn color to green
        addBtn.style.color="green"
        //show modal-cont
        modalCont.style.display="flex"
    }else{
        //add btn color to white
        addBtn.style.color="white"
        //hide modal-cont
        modalCont.style.display="none"
    }
})

//function to add a new ticket/task
function createTicket(ticketColor,text,ticketID){
    //create a new ticket container element
    const ticketCont=document.createElement("div")

    //set class as ticket-cont
    ticketCont.setAttribute("class","ticket-cont")

    //provide innerHtml to ticketCont
    ticketCont.innerHTML=`
        <div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id">task-${ticketID}</div>
        <div class="task-area">${text}</div>
        <div class="ticket-lock">
            <i class="fa-solid fa-lock"></i>
        </div>
    `
    //add remove handler on ticket-cont
    handleRemoval(ticketCont)

    //add handle lock on ticket-cont
    handleLock(ticketCont)

    //append ticket inside main
    mainCont.appendChild(ticketCont)
}

modalCont.addEventListener('keydown',function(e){
    //if we press shift button on modal then ticket generate
    if(e.key=='Shift'){
        //add btn color change to white
        addBtn.style.color="white"
        //textarea
        const taskContent=textArea.value
        //pass in the required fields to create create ticket
        //ticketID + 1
        ticketID=ticketID + 1
        createTicket(modalPriorityColor,taskContent,ticketID)
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

//delete ticket/task with help of remove-btn
removeBtn.addEventListener('click',function(){
    //toggle removeTaskFlag
    removeTaskFlag=!removeTaskFlag
    if(removeTaskFlag){
        //alert
        alert("deletion activated")
        //change btn color to red
        removeBtn.style.color="red"
    }else{
        //alert
        alert("deletion de-activated")
        //change btn color to white
        removeBtn.style.color="white"
    }
})

//function to handle remove ticket
function handleRemoval(ticket){
    ticket.addEventListener('click',function(){
        if(removeTaskFlag){
            ticket.remove()
        }
    })
}

//function to handle locking mechanism on ticket/task
function handleLock(ticket){
    //select the ticket-lock element on ticket
    const ticketLockElement=ticket.querySelector(".ticket-lock")
    //select the task-area element on ticket
    const ticketTaskElement=ticket.querySelector(".task-area")
    //select the actual icon element
    const ticketLockIcon=ticketLockElement.children[0]
    //or
    //const ticketLockIcon=ticketLockElement.querySelector("i")

    ticketLockIcon.addEventListener('click',function(){
        //check if icon contain fa-lock class
        if(ticketLockIcon.classList.contains("fa-lock")){
            //then remove fa-lock class
            ticketLockIcon.classList.remove("fa-lock")
            //then add fa-lock-open class
            ticketLockIcon.classList.add("fa-lock-open")
            //task-area editable
            ticketTaskElement.setAttribute("contenteditable","true")
        }else{
            //then remove fa-lock-open class
            ticketLockIcon.classList.remove("fa-lock-open")
            //then add fa-lock class
            ticketLockIcon.classList.add("fa-lock")
            //task-area non-editable
            ticketTaskElement.setAttribute("contenteditable","false")
        }
    })
}