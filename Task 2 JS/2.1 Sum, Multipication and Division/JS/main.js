var arr= []
var num1 = Number(prompt("Please enter first number"))
var num2 = Number(prompt("Please enter second number"))
while (num2 == 0) {num2 = prompt("please enter second number again, you can't divide by 0")}
var num3 = Number(prompt("Please enter third number"))
while (num3 == 0){num3 = prompt("please enter third number again, you can't divide by 0")}

arr.push(num1,num2,num3)

function sum(){return (arr[0] + arr[1] + arr[2])}
function multipication(){return (arr[0] * arr[1] * arr[2])}
function division(){return (arr[0] / arr[1] / arr[2])}

document.writeln(`<h2>Sum of the 3 values is <span> ${arr[0]} + ${arr[1]} + ${arr[2]} = ${sum()}</span></h2>`)
document.writeln(`<h2>Multipication of the 3 values is <span> ${arr[0]} * ${arr[1]} * ${arr[2]} = ${multipication()}</span></h2>`)
document.writeln(`<h2>Division of the 3 values is <span>${arr[0]} / ${arr[1]} / ${arr[2]} = ${division()}</span></h2>`)