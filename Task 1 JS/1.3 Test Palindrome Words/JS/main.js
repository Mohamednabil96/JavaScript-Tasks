var caseSensitive = confirm("Do you want to use Case-sensitive ?")
var inputWord = prompt("Please enter a word")
var isPalindrome = inputWord.split("").reverse("").join("")

if (caseSensitive){
   if(isPalindrome === inputWord) {
      document.writeln("<h1> Word is Palindrome! </h1>");
   }else{
      document.writeln("<h1> Word is Not Palindrome! </h1>");
   }
}else{
   if(isPalindrome.toLowerCase() === inputWord.toLowerCase()){
      document.writeln("<h1> Word is Palindrome! </h1>");
   }else{
      document.writeln("<h1> Word is Not Palindrome! </h1>")
   }
}