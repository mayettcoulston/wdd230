const pwd1 = document.querySelector("#pwd1")
const pwd2 = document.querySelector("#pwd2")
const fb = document.querySelector("#feedback")

pwd2.addEventListener("focusout", controlar)

function controlar() {
    //console.log("inside the fuction")
    if (pwd1.value !== pwd2.value) {
        //console.log("values do not match")
        pwd1.value = ""
        pwd2.value = ""
        fb.textContent = "Values do not match"
        
    } else {
        //console.log("Values match")
        fb.textContent = ""
    }
}