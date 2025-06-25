//1.select all cards
const allCards=document.querySelectorAll(".card");

//2.iterate over all cards
for(let i=0;i<allCards.length;i++){
    const currentCard=allCards[i];
    currentCard.addEventListener('click',()=>{
        //3.get card data-color
        let dataColor=currentCard.getAttribute('data-color')
        
        //4.if datacolor is present then remove from class
        //  if not present then add to class
        // if(currentCard.classList.contains(dataColor)){
        //     currentCard.classList.remove(dataColor)
        // }else{
        //     currentCard.classList.add(dataColor)
        // }
        currentCard.classList.toggle(dataColor)
    })
}
