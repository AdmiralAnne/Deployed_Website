let formid= document.getElementById("formid")
let ourField= document.getElementById("ourField")
let ourList = document.getElementById("ourList")

formid.addEventListener("submit",(parameter_event) => {
    parameter_event.preventDefault()
    createitem(ourField.value) //takes in the value that you typed as an argument for a function called create item which is defined below
})

function createitem(x/* this is ourField.value*/){
    let ourhtml =`<li> ${x} <button onclick="deleteItem(this)">Delete</button></li>` //this points to the element(selected to delete)
    
ourList.insertAdjacentHTML/*method*/(/*where?*/"beforeend", /*the content*/ourhtml) //this ourHtml variable gets passed into the UL

ourField.value=""  //clears text box
ourField.focus()  // reselects the textbox after adding items
// cannot add event listener to somethimg that doesnt exist\
}

function deleteItem(element_to_delete){
    element_to_delete.parentElement.remove()  //deletes the item and the whole List (Parent element)
}