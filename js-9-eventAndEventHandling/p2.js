//steps
//1.listen to key presses
//2.identify the key press
//3.scroll to the relevant section using Id's
//4.scroll to the top or bottom of my page

const firstSec=document.querySelector("#s1")
const secondSec=document.querySelector("#s2")
const thirdSec=document.querySelector("#s3")

document.addEventListener("keydown",(e)=>{
    const keyPressed=e.key
    if(keyPressed==1){
        firstSec.scrollIntoView(
            {behavior:"smooth",block:"center"})
    }else if(keyPressed==2){
        secondSec.scrollIntoView({behavior:"smooth",block:"center"})
    }else if(keyPressed==3){
        thirdSec.scrollIntoView({behavior:"smooth",block:"center"})
    }else if(keyPressed=='t' || keyPressed=='T'){
        window.scrollBy(
            0,
            document.querySelector("html").getBoundingClientRect().top
        )
    }else if(keyPressed=='b' || keyPressed=='B'){
        window.scrollBy(
            0,
            document.querySelector("html").getBoundingClientRect().bottom
        )
    }
})
