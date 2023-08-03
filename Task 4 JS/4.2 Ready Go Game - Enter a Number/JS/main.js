let colorInput = document.querySelector("#colorInput"),
colorInputBtn = document.querySelector("#colorInputBtn"),
readyCircle = document.querySelector("#readyCircle"),
readyText =document.querySelector("#readyText"),
steadyCircle = document.querySelector("#steadyCircle"),
steadyText = document.querySelector("#steadyText"),
goCircle = document.querySelector("#goCircle");
goText = document.querySelector("#goText");

function displayColor(e) {
e.preventDefault()
    if(parseInt(colorInput.value) == 1){
readyCircle.classList.add("bg-danger")
readyText.classList.remove("d-none")
readyText.classList.add("d-block")
console.log("Red")
    }else if (parseInt(colorInput.value) == 2) {
steadyCircle.classList.add("bg-warning")
steadyText.classList.remove("d-none")
steadyText.classList.add("d-block")
console.log("Yellow");
    }else if (parseInt(colorInput.value) == 3){
goCircle.classList.add("bg-success")
goText.classList.remove("d-none")
goText.classList.add("d-block")
console.log("Green");
    }else {
        alert("Please enter 1,2 or 3")
    }
}

colorInputBtn.addEventListener("click", displayColor)





