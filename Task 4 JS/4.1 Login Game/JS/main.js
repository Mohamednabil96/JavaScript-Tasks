var p1 = document.getElementById("p1")

document.querySelectorAll("button")[0].addEventListener("click",function changeInnerHtml() {
p1.innerHTML = `<span>Hello!</span>`
})

document.querySelectorAll("button")[1].addEventListener("click",function changeInnerText() {
p1.innerText = `<span>Hello!</span>`
})

document.querySelectorAll("button")[2].addEventListener("click",function changeStyle() {
p1.style.backgroundColor = "green"
p1.style.color = "white"
})

document.querySelectorAll("button")[3].addEventListener("click",function changeTextContent() {
p1.textContent = "textContent works!"
})

var fname = document.getElementById("fname")
var fnameRegex = /^[a-zA-z]{3,}$/gm
var age = document.getElementById("age")
var loginbtn = document.getElementById("loginbtn")
var invalidInputs = document.getElementById ("invalidInputs")
var validInputs = document.querySelector("#validInputs")


fname.addEventListener("input", function invalidName (e){
    if (e.target.value.length <3 ){
    fname.style.border="2px solid red"
    invalidInputs.style.display= "block"
    }else{
    fname.style.border="2px solid green"
    invalidInputs.style.display= "none"
    }
});
    
age.addEventListener("input", function invalidName (e){
    if (parseInt(e.target.value) <= 18 ){
    age.style.border="2px solid red"
    invalidInputs.style.display= "block"
    }else{
    age.style.border="2px solid green"
    invalidInputs.style.display= "none"
    }
});
        
loginbtn.addEventListener("click", function (){
if (!fnameRegex.test(fname.value) || parseInt(age.value)< 18){
alert("invalid inputs")
}else{
alert(`Thanks ${fname.value}!`)
}
});












