// WRITE SOLUTION HERE
import { data } from './data.js';

const container=document.querySelector(".container")

for(let i=0;i<data.length;i++){
    let title=data[i].title;
    let category=data[i].category;
    let ratingRate=data[i].rating.rate;
    ratingRate=Math.round(ratingRate);
    let ratingcount=data[i].rating.count;
    createCard(title,category,ratingRate,ratingcount)
}

function createCard(title,category,ratingRate,ratingcount){
    const card=document.createElement("div")
    card.setAttribute("class","card")

    let starsHTML = "";
    for (let i = 0; i < 5; i++) {
        if (i < ratingRate) {
            starsHTML += `<span class="star__filled">&#9733;</span>\n`;
        } else {
            starsHTML += `<span class="star__notfilled">&#9734;</span>\n`;
        }
    }
    card.innerHTML=`
            <div class="details">
                <span class="product__name">${title}</span>
                <br>
                <span class="product__category">${category}</span>
                <div class="all__star">
                    ${starsHTML}
                </div>
                <div class="rating__count">Rating Count : <span>${ratingcount}</span></div>
            </div>
            <div class="btn">
                <button class="btn__buy">Buy Now</button>
            </div>
        `

    container.appendChild(card)
}