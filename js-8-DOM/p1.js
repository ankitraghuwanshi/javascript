//steps

//1.select the element
//const btn = document.getElementById("btn-id");
//console.log(btn);
//or
//const btn = document.getElementsByClassName("btn-class")
//or
//const btn=document.querySelector("#btn-id")
//const btn=document.querySelector(".btn-class")
const btn = document.querySelector("button");
//console.log(btn);

//2.handling the click event
btn.addEventListener("click", () => {
  //console.log("button clicked");

  //3.add a new div with text hello in my html
  const newDiv = document.createElement("div");
  newDiv.innerText = "hello";

  //4.attach this newly created div to HTML
  const body = document.querySelector("body");
  body.appendChild(newDiv);
});
// btn,addEventListener('dblclick',()=>{
//     console.log("button double clicked");
// })
