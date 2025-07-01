const x = {
  ticketColor: "lightpink",
  ticketContent: "complete my kanban board",
  ticketId: 2,
};
localStorage.setItem("ticket", JSON.stringify(x));

localStorage.setItem("ankit", "developer");

console.log(localStorage.getItem("ticket"));
//for use case
console.log(JSON.parse(localStorage.getItem("ticket")));

//but
//the best way to use json.parse and localstorage
//first check if ticket is present in localstorage or not
if (localStorage.getItem("ticket")) {
  //then get it from localstorage using parse
  JSON.parse(localStorage.getItem("ticket"));
}

//remove ticket from localstorage
localStorage.removeItem("ticket");

//clear localstorage
localStorage.clear();
