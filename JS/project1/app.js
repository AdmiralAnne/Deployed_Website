<<<<<<< HEAD
const closedFace=document.querySelector(".closed") //selects
const openFace=document.querySelector(".open")  //selects

//add event listener
closedFace.addEventListener("click", () =>{
    if(openFace.classList.contains("open")){
        openFace.classList.add("active");
        closedFace.classList.remove("active")
    }
})

openFace.addEventListener("click", ()=> {
    if(closedFace.classList.contains("closed")){
        closedFace.classList.add("active");
        openFace.classList.remove("active")
    }
=======
const closedFace=document.querySelector(".closed") //selects
const openFace=document.querySelector(".open")  //selects

//add event listener
closedFace.addEventListener("click", () =>{
    if(openFace.classList.contains("open")){
        openFace.classList.add("active");
        closedFace.classList.remove("active")
    }
})

openFace.addEventListener("click", ()=> {
    if(closedFace.classList.contains("closed")){
        closedFace.classList.add("active");
        openFace.classList.remove("active")
    }
>>>>>>> 0bde94d6b236f9f14c44869b77e6572b14161ea1
})