var arr=[]

for (let i = 0; i < 5; i++) {
    var enteredName =  prompt(`Please enter name (${i+1})`)
    arr.push(enteredName)
}
// var arr = ["Ahmed" , "Islam" , "Sandra" , "Fatma" , "Ali"]

var newNum1 = Math.floor(Math.random() * (arr.length) ); console.log(newNum1);
var newNum2 = Math.floor(Math.random() * (arr.length) ); console.log(newNum2);

document.writeln(`<h2>The Names you entered are : <span>[ "${arr[0]}" , "${arr[1]}" , "${arr[2]}" , "${arr[3]}" , "${arr[4]}" ]</span></h2>`)

if (newNum1 !== newNum2) {
    document.writeln(`<h2>Random Names : <span>["${arr[newNum1]}" , "${arr[newNum2]}"]</span></h2>`);
}else{
     newNum2 = Math.floor(Math.random() * (arr.length) ) -1;
}
