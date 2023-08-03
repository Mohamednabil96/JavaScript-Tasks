var enteredSentence = prompt("Please enter a sentence")
var enteredChar = prompt("Please enter a character")

function charOccurence (enteredSentence, enteredChar){
    var arr= []
    for (i=0; i< enteredSentence.length ; i++){
        if (enteredSentence[i] == enteredChar){
            arr.push(i+1)
        }
    }
    return arr ;
}
var res = charOccurence(enteredSentence, enteredChar)

document.writeln(`<h2>The sentence you typed is <span> (${enteredSentence})</span></h2>`)
document.writeln(`<h2>The character you typed is <span> (${enteredChar})</span></h2>`)
document.writeln(`<h2>The character you typed occured in <span> [${res}]</span></h2>`)