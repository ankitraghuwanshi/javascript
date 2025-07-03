const star=document.querySelectorAll(".star")
const rating=document.querySelector("#rating")

star.forEach(function(elem){
    elem.addEventListener('click',function(e){
        const dataValue=e.target.getAttribute("data-value")
        for(let i=0;i<dataValue;i++){
            star[i].classList.add("filled")
        }
        for(let i=dataValue;i<5;i++){
            if(star[i].classList.contains("filled")){
                star[i].classList.remove("filled")
            }
        }
        rating.innerText=dataValue
    })
})

//if we click not on star, then all star become colorless