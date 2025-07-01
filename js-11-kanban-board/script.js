//1.modal popup with toggle
const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const mainCont = document.querySelector(".main-cont");
const textArea = document.querySelector(".textArea-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");
const removeBtn = document.querySelector(".remove-btn");
const allFilterColors = document.querySelectorAll(".color");
const instructionBtn=document.querySelector(".instruction-btn")
const instruction=document.querySelector(".instruction")

//let over const
let addTaskFlag = false;
let removeTaskFlag = false;
let modalPriorityColor = "lightpink";
let ticketID = 0;

//store all ticket/task color
const colorArray = ["lightpink", "lightyellow", "lightgreen", "lightblue"];

//store all ticket/task data
const taskArray = [];

//check if we already have some data in localstorage
//if there is yes then call createticket
if (localStorage.getItem("tickets")) {
  try {
    const ticketArray = JSON.parse(localStorage.getItem("tickets"));
    ticketArray.forEach(function (ticketItem) {
      createTicket(
        ticketItem.ticketColor,
        ticketItem.taskContent,
        ticketItem.taskId,
        true
      );
    });
  } catch (error) {
    console.log("there is some error")
    localStorage.removeItem('tickets')
  }
}

addBtn.addEventListener("click", function () {
  //sawp the addTaskFlag
  addTaskFlag = !addTaskFlag;
  if (addTaskFlag) {
    //add btn color to green
    addBtn.style.color = "green";
    //show modal-cont
    modalCont.style.display = "flex";
  } else {
    //add btn color to white
    addBtn.style.color = "white";
    //hide modal-cont
    modalCont.style.display = "none";
  }
});

//function to add a new ticket/task
function createTicket(ticketColor, taskContent, taskId, shouldAddToArray) {
  //create a new ticket container element
  const ticketCont = document.createElement("div");

  //set class as ticket-cont
  ticketCont.setAttribute("class", "ticket-cont");

  //provide innerHtml to ticketCont
  ticketCont.innerHTML = `
        <div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id">task-${taskId}</div>
        <div class="task-area">${taskContent}</div>
        <div class="ticket-lock">
            <i class="fa-solid fa-lock"></i>
        </div>
    `;
  //add remove handler on ticket-cont
  handleRemoval(ticketCont, taskId);

  //add handle lock on ticket-cont
  handleLock(ticketCont, taskId);

  //handle color of ticket
  handleColor(ticketCont, taskId);

  //if shouldAddToArray is true then add to taskArray
  //(means only ticket creating time not filtering time)
  if (shouldAddToArray) {
    //add ticket/task details inside taskarray
    taskArray.push({ ticketColor, taskContent, taskId });
  }

  //store task array to local storage
  //it override if update happen
  localStorage.setItem("tickets", JSON.stringify(taskArray));

  //append ticket inside main
  mainCont.appendChild(ticketCont);
}

modalCont.addEventListener("keydown", function (e) {
  //if we press shift button on modal then ticket generate
  if (e.key == "Shift") {
    //add btn color change to white
    addBtn.style.color = "white";
    //textarea
    const taskContent = textArea.value;
    //pass in the required fields to create create ticket
    //ticketID + 1
    ticketID = ticketID + 1;
    createTicket(modalPriorityColor, taskContent, ticketID, true);
    //modal hide
    modalCont.style.display = "none";
    addTaskFlag = !addTaskFlag;
    //textarea as empty
    textArea.value = "";
  }
});

//add event listener on all the priority colors in the modal
allPriorityColors.forEach(function (colorElem) {
  colorElem.addEventListener("click", function () {
    //remove active class from all priority-color-cont child
    allPriorityColors.forEach(function (colorElemCurrent) {
      colorElemCurrent.classList.remove("active");
    });

    //add active class to selected color
    colorElem.classList.add("active");

    //implement logic to assign the selected color to the task
    modalPriorityColor = colorElem.classList[0];
  });
});

//delete ticket/task with help of remove-btn
removeBtn.addEventListener("click", function () {
  //toggle removeTaskFlag
  removeTaskFlag = !removeTaskFlag;
  if (removeTaskFlag) {
    //alert
    alert("deletion activated");
    //change btn color to red
    removeBtn.style.color = "red";
  } else {
    //alert
    alert("deletion de-activated");
    //change btn color to white
    removeBtn.style.color = "white";
  }
});

//function to handle remove ticket
function handleRemoval(ticket, taskId) {
  ticket.addEventListener("click", function () {
    if (removeTaskFlag) {
      ticket.remove();

      //remove this task from taskArray (means updating taskArray)
      //find index in taskArray
      const currentTaskIndex = taskArray.findIndex((t) => t.taskId == taskId);
      //remove from taskArray
      taskArray.splice(currentTaskIndex, 1);

      //update local storage
      //it override the update
      localStorage.setItem("tickets", JSON.stringify(taskArray))
    }
  });
}

//function to handle locking mechanism on ticket/task
function handleLock(ticket, taskId) {
  //select the ticket-lock element on ticket
  const ticketLockElement = ticket.querySelector(".ticket-lock");
  //select the task-area element on ticket
  const ticketTaskElement = ticket.querySelector(".task-area");
  //select the actual icon element
  const ticketLockIcon = ticketLockElement.children[0];
  //or
  //const ticketLockIcon=ticketLockElement.querySelector("i")

  ticketLockIcon.addEventListener("click", function () {
    //check if icon contain fa-lock class
    if (ticketLockIcon.classList.contains("fa-lock")) {
      //then remove fa-lock class
      ticketLockIcon.classList.remove("fa-lock");
      //then add fa-lock-open class
      ticketLockIcon.classList.add("fa-lock-open");
      //task-area editable
      ticketTaskElement.setAttribute("contenteditable", "true");
    } else {
      //then remove fa-lock-open class
      ticketLockIcon.classList.remove("fa-lock-open");
      //then add fa-lock class
      ticketLockIcon.classList.add("fa-lock");
      //task-area non-editable
      ticketTaskElement.setAttribute("contenteditable", "false");

      //updating ticket/task content inside taskArray
      //find the exact task that we want to update inside task array
      const currentTask = taskArray.find((task) => task.taskId == taskId);
      //update
      currentTask.taskContent = ticketTaskElement.innerText;

      //update in local storage also
      //it override the update in localstorage
      localStorage.setItem("tickets", JSON.stringify(taskArray))
    }
  });
}

//function to change ticket/task color
function handleColor(ticket, taskId) {
  //select the color element
  const colorElem = ticket.querySelector(".ticket-color");
  //add eventlistener to elem
  colorElem.addEventListener("click", function () {
    //get the current color
    const currentColor = colorElem.classList[1];

    //figure index of color array
    let currentColorIdx = colorArray.findIndex(
      (color) => color == currentColor
    );
    //or
    //let currentColorIdx=-1
    //colorArray.forEach(function(color,idx){if(color==currentColor){currentColorIdx=idx}})

    //new current color index after click
    currentColorIdx = (currentColorIdx + 1) % colorArray.length;
    //so new color will be
    const newColor = colorArray[currentColorIdx];

    //update color on ticket in two steps
    //remove current color class
    colorElem.classList.remove(currentColor);
    //add new color class
    colorElem.classList.add(newColor);

    //update the taskArray with the updated color
    //find the exact task that we want to update inside task array
    const currentTask = taskArray.find((task) => task.taskId == taskId);
    //update
    currentTask.ticketColor = newColor;

    //update in localstorage also 
    //it override update in local storage
    localStorage.setItem("tickets", JSON.stringify(taskArray))
  });
}

//handle the filtering logic
allFilterColors.forEach(function (colorElem) {
  //filter on single click
  colorElem.addEventListener("click", function () {
    //fetch color from colorElem
    const selectFilterColor = colorElem.classList[0];
    //create the filtered array from taskArray
    const filteredArray = taskArray.filter(
      (task) => task.ticketColor == selectFilterColor
    );
    //remove all ticket/task from screen (main container)
    mainCont.innerHTML = "";
    //add-back the task from from filteredArray
    filteredArray.forEach((task) => {
      createTicket(task.ticketColor, task.taskContent, task.taskId, false);
    });
  });

  //show all ticket on double click
  colorElem.addEventListener("dblclick", function () {
    //remove all filtered ticket/task from screen (main container)
    mainCont.innerHTML = "";
    //add-back all the task from from taskArray
    taskArray.forEach((task) => {
      createTicket(task.ticketColor, task.taskContent, task.taskId, false);
    });
  });
});

//instruction btn 
let instructionFlag=false
instructionBtn.addEventListener('click',function(){
    instructionFlag=!instructionFlag
    if(instructionFlag){
        instruction.style.display="flex"
    }else{
        instruction.style.display="none"
    }
})
