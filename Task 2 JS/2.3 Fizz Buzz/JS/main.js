var enteredNumber = Number(prompt("Please enter a number"))
function fizzBuzz (enteredNumber){
if (enteredNumber% 3 ==0 && enteredNumber %5 == 0){
    return "Fizz Buzz"
}else if (enteredNumber %3 == 0){
    return "Fizz"
}else if (enteredNumber %5 == 0){
    return "Buzz"
}else{
    return "none"
}
}
var res = fizzBuzz(enteredNumber) 
document.writeln(`<h2>${res}</h2>`)