const form = document.getElementById("formid");
const submitmessage = document.getElementById("submitmessage");
const submitbutton = document.getElementById("submitbutton"); 

console.log(form)
console.log(submitbutton)

function handleclick(){
    form.classList.add("hidden")
    form.classList.remove("visable")
    submitmessage.classList.add("visable")
    submitmessage.classList.remove("hidden")
}

submitbutton.addEventListener("click", handleclick)