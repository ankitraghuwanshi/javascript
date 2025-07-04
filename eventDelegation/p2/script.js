//my approach
const starsParent=document.querySelector("#stars")
const stars=document.querySelectorAll(".star")
const rating=document.querySelector("#rating")

starsParent.addEventListener('click',function(e){
    const dataValue=e.target.getAttribute("data-value")
    stars.forEach(function(star){
        const currentValue=star.getAttribute("data-value")
        if(currentValue<=dataValue){
            star.classList.add("filled")
        }else{
            if(star.classList.contains("filled")){
                star.classList.remove("filled")
            }
        }
    })
    rating.innerText=dataValue
})


//sir approach
// const starsParent = document.getElementById('stars')
// const stars = document.querySelectorAll('.star')
// const ratingDisplay = document.getElementById('rating')
// starsParent.addEventListener('click', (e) => {
//     const star = e.target
//     const value = star.getAttribute('data-value')
//     updateValue(value)
// })
// function updateValue(value) {
//     // Loop over all stars 
//     // And add appropriate class i.e filled
//     stars.forEach((starElem) => {
//         const currentValue = starElem.getAttribute('data-value')
//         starElem.classList.toggle(
//             "filled",
//             parseInt(currentValue, 10) <= parseInt(value, 10)
//         )
//     })
//     ratingDisplay.innerText = value
// }