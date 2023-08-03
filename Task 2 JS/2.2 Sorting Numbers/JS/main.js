var arr= []

for (let i = 0; i < 5; i++) {
 var enteredNum =  Number(prompt(`Please enter number (${i+1})`))
 arr.push(enteredNum)
}

document.writeln(`<h2>u've entered the values of <span>${arr[0]} , ${arr[1]} , ${arr[2]} , ${arr[3]} , ${arr[4]}</span></h2>`)
document.writeln(`<h2>ur values after being sorted descending <span>${arr.sort((a, b) => b - a)} </span></h2>`)
document.writeln(`<h2>ur values after being sorted ascending <span> ${arr.sort((a, b) => a - b)}</span></h2>`)