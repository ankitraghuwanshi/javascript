//when we click on card ,
// it turn to any color but not the text color,
// no matter how many time we click

const colorsArray=['red','green','blue','yellow','']

const parent=document.querySelector("#colorPalette")
parent.addEventListener('click',function(e){
    const restrictedColor=(e.target.innerText).toLowerCase()
    console.log(restrictedColor)
    const currentColor=e.target.style.backgroundColor
    let newColorIndex=Math.floor(Math.random()*3)
    let newColor=colorsArray[newColorIndex]
    while((newColor===currentColor) || (newColor===restrictedColor.toLowerCase())){
        newColorIndex=Math.floor(Math.random()*3)
        newColor=colorsArray[newColorIndex]
    }
    e.target.style.backgroundColor=newColor
})


