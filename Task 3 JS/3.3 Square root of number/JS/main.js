var enteredNum = parseFloat(prompt("What is the value you want to calculate its square root ?", "Type your value here"))

if (enteredNum == NaN){
    enteredNum = prompt("What is the value you want to calculate its square root ?", "Type your value here")
}else if (enteredNum !== NaN){
    var squareRoot = Math.sqrt(enteredNum) 
    alert (`Square Root of ${enteredNum} is ${squareRoot}`)
}

