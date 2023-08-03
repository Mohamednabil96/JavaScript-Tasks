var sum = 0;

do {
   do {
      var inputNumber = Number(prompt('Enter a number, 0 to end.'));
      if (isNaN(inputNumber)) {
         alert("Entered value is invalid.");
      }
   }
   while (isNaN(inputNumber));

   if (inputNumber !== 0) {
      sum += inputNumber;
   }
}
while (inputNumber !== 0 && sum<100);

alert(`The sum is ${sum}`);