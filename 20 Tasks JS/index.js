// task 1

var inputNumber = Number(window.prompt("Please enter a number"))

console.log(inputNumber);
document.getElementById("task1").innerHTML = inputNumber

//.................................................................

//  task 2

var inputNumber = Number(window.prompt("Please enter a number divisible by 3 and 4 "))

if (inputNumber %3 == 0 && inputNumber %4 ==0) {
    document.getElementById("task2").innerHTML = "Yes"
}else {
    document.getElementById("task2").innerHTML = "No"
}

//.................................................................

// task 3

var inputNumber1 = Number(window.prompt("Please enter first number"))
var inputNumber2 = Number(window.prompt("Please enter second number"))

if (inputNumber1 > inputNumber2) {
    document.getElementById("task3").innerHTML = inputNumber1
}else if (inputNumber1 < inputNumber2) {
    document.getElementById("task3").innerHTML = inputNumber2
}else if (inputNumber1 == inputNumber2) {
    document.getElementById("task3").innerHTML = "Numbers are equal"
}else{
    document.getElementById("task3").innerHTML = "Invalid input"
}
 
//.................................................................

// task 4

var inputNumber = Number(window.prompt("Please enter a number"))

if (inputNumber > 0) {
    document.getElementById("task4").innerHTML = "Positive"
}else if (inputNumber < 0) {
    document.getElementById("task4").innerHTML = "Negative"
}else if (inputNumber == 0) {
    document.getElementById("task4").innerHTML = "Number equals zero"
}else{
    document.getElementById("task4").innerHTML = "Invalid input"
}

//.................................................................

// task 5

var inputNumber1 = Number(window.prompt("Please enter first number"))
var inputNumber2 = Number(window.prompt("Please enter second number"))
var inputNumber3 = Number(window.prompt("Please enter third number"))

if (inputNumber1 > inputNumber2 && inputNumber1 > inputNumber3 && inputNumber2 > inputNumber3) {
    document.getElementById("task5-1").innerHTML = "Max element = " + inputNumber1
    document.getElementById("task5-2").innerHTML = "Min element = " + inputNumber3
    
}else if (inputNumber1 > inputNumber2 && inputNumber1 > inputNumber3 && inputNumber3 > inputNumber2) {
    document.getElementById("task5-1").innerHTML = "Max element = " + inputNumber1
    document.getElementById("task5-2").innerHTML = "Min element = " + inputNumber2

}else if (inputNumber2 > inputNumber1 && inputNumber2 > inputNumber3 && inputNumber3 > inputNumber1) {
    document.getElementById("task5-1").innerHTML = "Max element = " + inputNumber2
    document.getElementById("task5-2").innerHTML = "Min element = " + inputNumber1

}else if (inputNumber2 > inputNumber1 && inputNumber2 > inputNumber3 && inputNumber1 > inputNumber3) {
    document.getElementById("task5-1").innerHTML = "Max element = " + inputNumber2
    document.getElementById("task5-2").innerHTML = "Min element = " + inputNumber3

}else if (inputNumber3 > inputNumber1 && inputNumber3 > inputNumber2 && inputNumber2 > inputNumber1) {
    document.getElementById("task5-1").innerHTML = "Max element = " + inputNumber3
    document.getElementById("task5-2").innerHTML = "Min element = " + inputNumber1

}else if (inputNumber3 > inputNumber1 && inputNumber3 > inputNumber2 && inputNumber1 > inputNumber2) {
    document.getElementById("task5-1").innerHTML = "Max element = " + inputNumber3
    document.getElementById("task5-2").innerHTML = "Min element = " + inputNumber2

}else{
    document.getElementById("task5-3").innerHTML = "Invalid input"
}

//.................................................................

// task 6-7

var inputNumber = Number(window.prompt("Please enter a number"))

if (inputNumber %2 == 0) {
    document.getElementById("task6").innerHTML = "Even"
    
}else if (inputNumber %2 > 0){
    document.getElementById("task6").innerHTML = "Odd"

}else{
    document.getElementById("task6").innerHTML = "Invalid input"
}

//.................................................................

// task 8

var inputCharacter = window.prompt("Please enter a character")

if (inputCharacter == "A" || inputCharacter == "a" || inputCharacter == "E" || inputCharacter == "e" || inputCharacter == "I" || inputCharacter == "i" || inputCharacter == "O" || inputCharacter == "o" || inputCharacter == "U" || inputCharacter == "u") {
    document.getElementById("task8").innerHTML = "Vowel"
} else {
    document.getElementById("task8").innerHTML = "Constant"
}

//.................................................................

// task 9

var inputNumber = Number(window.prompt("Please enter a number"))

for (var i = 1; i <= inputNumber; i++) {
    document.getElementById("task9").innerHTML = i 
    console.log(i)
}


//.................................................................

// task 10

var inputNumber = Number(window.prompt("Please enter a number"))

for (var i = 1; i <=12; i++) {
    var outputNumber = inputNumber*i
    console.log(outputNumber);
    document.getElementById("task10").innerHTML = outputNumber
}


//.................................................................

// task 11

var inputNumber = Number(window.prompt("Please enter a number"))

for (var i = 2; i < inputNumber; i+=2) {
    console.log(i);
    document.getElementById("task11").innerHTML = inputNumber
}


//.................................................................

// task 12-a

var inputNumber1 = Number(window.prompt("Please enter a number"))
var inputNumber2 = Number(window.prompt("Please enter a number"))
var outputNumber = inputNumber1 ** inputNumber2

console.log(outputNumber);
document.getElementById("task12").innerHTML = outputNumber


//.................................................................

// task 12-b

var inputNumber1 = Number(window.prompt("Please enter mark of subject 1"))
var inputNumber2 = Number(window.prompt("Please enter mark of subject 2"))
var inputNumber3 = Number(window.prompt("Please enter mark of subject 3"))
var inputNumber4 = Number(window.prompt("Please enter mark of subject 4"))
var inputNumber5 = Number(window.prompt("Please enter mark of subject 5"))

var totalMarks = inputNumber1 + inputNumber2 + inputNumber3 + inputNumber4 + inputNumber5
document.getElementById("task12-1").innerHTML = "Total Marks = " + totalMarks

var averageMarks = totalMarks / 5
document.getElementById("task12-2").innerHTML = "Average Marks = " + averageMarks

document.getElementById("task12-3").innerHTML = "Percentage = " + averageMarks + " %"


//.................................................................

// task 13

var inputNumber = window.prompt("Please enter month number")

if (inputNumber == 1 || inputNumber == 3 || inputNumber == 5 || inputNumber == 7 || inputNumber == 8 || inputNumber == 10 || inputNumber == 12 ) {
    document.getElementById("task13").innerHTML = "Days in month: 31 day " 
}else if (inputNumber == 4 || inputNumber == 6 || inputNumber == 9 || inputNumber == 11 ) {
    document.getElementById("task13").innerHTML = "Days in month: 30 day " 
}else if (inputNumber == 2){
    document.getElementById("task13").innerHTML = "Days in month: 28 day " 
}else {
    document.getElementById("task13").innerHTML = "Invalid input" 
}


//.................................................................

// task 14

var inputNumber1 = Number(window.prompt("Please enter mark of Physics"))
var inputNumber2 = Number(window.prompt("Please enter mark of Chemistry"))
var inputNumber3 = Number(window.prompt("Please enter mark of Biology"))
var inputNumber4 = Number(window.prompt("Please enter mark of Mathematics"))
var inputNumber5 = Number(window.prompt("Please enter mark of Computer"))
var totalMarks = inputNumber1 + inputNumber2 + inputNumber3 + inputNumber4 + inputNumber5 

var percentage = totalMarks / 5
document.getElementById("task14-1").innerHTML = "Percentage = " + percentage + " %"

if (percentage >= 90) {
    document.getElementById("task14-2").innerHTML = "Grad A"

}else if (percentage >= 80) {
    document.getElementById("task14-2").innerHTML = "Grad B"

}else if (percentage >= 70) {
    document.getElementById("task14-2").innerHTML = "Grad C"

}else if (percentage >= 60) {
    document.getElementById("task14-2").innerHTML = "Grad D"

}else if (percentage >= 40) {
    document.getElementById("task14-2").innerHTML = "Grad E"

}else if (percentage < 40) {
    document.getElementById("task14-2").innerHTML = "Grad F"

}else if (percentage >100 || percentage <0){
    document.getElementById("task14-2").innerHTML = "Invalid inputs"
}

//.................................................................

// task 15

var inputNumber = window.prompt("Please enter month number")

switch (inputNumber) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":

        document.getElementById("task15").innerHTML = "Days in month: 31 day" 
 
    break;

    case "4":
    case "6":
    case "9":
    case "11":

        document.getElementById("task15").innerHTML = "Days in month: 30 day" 
 
    break;

    case "2":

        document.getElementById("task15").innerHTML = "Days in month: 28 day" 
     
    break;

    default:

    document.getElementById("task15").innerHTML = "Invalid Input" 

    break;
}

//.................................................................

// task 16

var inputcharacter = window.prompt("Please enter a character")

switch (inputcharacter) {
    case "A":
    case "a":
    case "E":
    case "e":
    case "I":
    case "i":
    case "O":
    case "o":
    case "U":
    case "u":
        document.getElementById("task16").innerHTML = "Vowel"
    break;

    default:
    document.getElementById("task16").innerHTML = "Constant"
    break;
}

//.................................................................

// task 17

var inputNumber1 = Number(window.prompt("Please enter first number"))
var inputNumber2 = Number(window.prompt("Please enter second number"))

switch (true) {
    case (inputNumber1 > inputNumber2) :
        document.getElementById("task17").innerHTML = Number(inputNumber1)
    break;

    case (inputNumber1 < inputNumber2):
        document.getElementById("task17").innerHTML = Number(inputNumber2)
    break;
    
    default:
        document.getElementById("task17").innerHTML = "Invalid input"
    break;
}

//.................................................................

// task 18

var inputNumber = Number(window.prompt("Please enter a number"))

switch (true) {
    case (inputNumber %2 == 0):
        document.getElementById("task18").innerHTML = "Even"
    break;

    case (inputNumber %2 > 0):
        document.getElementById("task18").innerHTML = "Odd"
    break;

    default:
        document.getElementById("task18").innerHTML = "Invalid input"
    break;
}

//.................................................................

// task 19

var inputNumber = Number(window.prompt("Please enter a number"))

switch (true) {
    case (inputNumber > 0):
        document.getElementById("task19").innerHTML = "Positive"
    break;

    case (inputNumber < 0):
        document.getElementById("task19").innerHTML = "Negative"
    break;

    case (inputNumber == 0):
        document.getElementById("task19").innerHTML = "Number equals zero"
    break;

    default:
        document.getElementById("task19").innerHTML = "Invalid input"
    break;
}

//.................................................................

// task 20

var inputNumber1 = Number(window.prompt("Please enter first number"));
var operation = window.prompt("Please enter the operation +, -, *, / or ^");
var inputNumber2 = Number(window.prompt("Please enter second number"));

switch (operation) {
    case "+":
        var result1 = inputNumber1 + inputNumber2;
        document.getElementById("task20").innerHTML = result1;
    break;

    case "-":
        var result2 = inputNumber1 - inputNumber2;
        document.getElementById("task20").innerHTML = result2;
    break;

    case "*":
        var result3 = inputNumber1 * inputNumber2;
        document.getElementById("task20").innerHTML = result3;
    break;


    case "/":
        var result4 = inputNumber1 / inputNumber2;
        document.getElementById("task20").innerHTML = result4;
    break;

    case "^":
    case "**":    
        var result5 = inputNumber1 ** inputNumber2;
        document.getElementById("task20").innerHTML = result5;
    break;

    default:
        document.getElementById("task20").innerHTML = "Invalid input";
    break;
}

//.................................................................