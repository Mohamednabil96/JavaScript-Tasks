var enteredAngle = Number(prompt("What is the angle you want to calculate its cos value ?", "Type your value here"))

if (enteredAngle == NaN){
    enteredAngle = Number(prompt("What is the angle you want to calculate its cos value ?", "Type your value here"))
}else{
    // var cosValue = Math.round(Math.cos((Math.PI*enteredAngle)/180)) 
    var cosValue = Math.round(Math.cos((Math.PI*enteredAngle)/180)) 
    console.log(cosValue);
document.writeln(`<h2>cos (${enteredAngle}) is (${cosValue})</h2>`)

}

