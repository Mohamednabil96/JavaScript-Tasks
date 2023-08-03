let readyCircle = document.querySelector("#readyCircle"),
readyText =document.querySelector("#readyText"),
steadyCircle = document.querySelector("#steadyCircle"),
steadyText = document.querySelector("#steadyText"),
goCircle = document.querySelector("#goCircle");
goText = document.querySelector("#goText");

// Display Red
var displayRed = setTimeout(function redStarts(){
    readyCircle.classList.add("bg-danger")
    readyText.classList.remove("d-none")
    readyText.classList.add("d-block")
    goCircle.classList.remove("bg-success")
    goText.classList.add("d-none")
    goText.classList.remove("d-block")
    },2000)

// Display Yellow
var displayYellow = setTimeout(function yellowStarts(){
    steadyCircle.classList.add("bg-warning")
    steadyText.classList.remove("d-none")
    steadyText.classList.add("d-block")
    readyCircle.classList.remove("bg-danger")
    readyText.classList.add("d-none")
    readyText.classList.remove("d-block")
    },4000)
    
// Display Green
var displayGreen = setTimeout(function greenStarts(){
    goCircle.classList.add("bg-success")
    goText.classList.remove("d-none")
    goText.classList.add("d-block")
    steadyCircle.classList.remove("bg-warning")
    steadyText.classList.add("d-none")
    steadyText.classList.remove("d-block")
    }, 6000)

// Display None
var displayNone= setTimeout(() => {
    goCircle.classList.remove("bg-success")
    goText.classList.add("d-none")
    goText.classList.remove("d-block")
    }, 8000)  