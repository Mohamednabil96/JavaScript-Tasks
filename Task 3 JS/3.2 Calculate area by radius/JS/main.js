var myRadius = parseFloat(prompt("What is the value of your circle radius in cm ?", "Type your value here"));
if (myRadius == NaN){
    myRadius = parseFloat(prompt("What is the value of your circle radius in cm ?", "Type your value here"));
}else if (myRadius !== NaN){
function calculateArea(myRadius) {
    return (myRadius * myRadius * Math.PI);
}
function myArea() {
    var area = calculateArea(myRadius);
    alert(`The Total area of the circle is ${area} centimeters.`);
}
myArea(myRadius);
}