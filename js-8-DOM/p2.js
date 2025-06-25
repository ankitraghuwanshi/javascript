//step-1
const allListItems = document.querySelectorAll("li");
console.log(allListItems);
//step-2
const newLi = document.createElement("li");
newLi.innerText = "7 by ankit";
//step-3
const listItemContain8 = allListItems[6];
//step-4
const listParent = document.querySelector("ul");
listParent.insertBefore(newLi, listItemContain8);

// How to add the element after 8
// By using nextSibling
// listParent.insertBefore(missingElement, listItemContaining8.nextSibling);
