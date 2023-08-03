var myString = prompt("Please enter a word");
var mySubString = "E";

var myStringLC = myString.toLowerCase();
var mySubStringLC = mySubString.toLowerCase();

var count = myStringLC.split(mySubStringLC).length -1;

alert(`The letter (e) occured in the word ${count} times`)
document.writeln(`<h1> The letter (e) occured in the word ${count} times </h1>`)

// var enteredWord = prompt("Please enter a word")
// var count = 0
// for (var i =0 ;i < enteredWord.length ;i++ ) {
// if (enteredWord == "e"){
//     count+=1;
// }    
// }