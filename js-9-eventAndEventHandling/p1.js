// Q Make the filter work
//Steps of solving this problem
// 1.Selection: Select the dropdown
// 2.Monitor dropdown changes
// 3.Value of the dropdown
const select=document.querySelector("select")
select.addEventListener('change',()=>{
    const valueOfDropdown=select.value
    // 4.Selecting all the cards
    const allCards=document.querySelectorAll(".price")
    // 5.Determine which movies to display
    // 6.Update visibility of movie
    // 7.Handling "none"
    // 8.Apply these changes
    if(valueOfDropdown == "none"){
        //show all
        for(let i=0;i<allCards.length;i++){
            allCards[i].parentElement.style.display="block"
        }
    }else{
        for(let i=0;i<allCards.length;i++){
            const currentCard=allCards[i]
            const currentCardCategory=currentCard.getAttribute('data-category')
            if(currentCardCategory==valueOfDropdown){
                //show it
                currentCard.parentElement.style.display="block"
            }else{
                //hide it
                currentCard.parentElement.style.display="none"
            }
        }
    }
})