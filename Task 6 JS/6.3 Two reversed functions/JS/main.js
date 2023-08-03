// 1
function reverseArgs() {
    let args = Array.from(arguments); 
    args.reverse(); 
    return args;
}
console.log(reverseArgs(2,4,6,8,10));


// 2
function reverseArgs2(...args) {
    args.reverse();
    return args;
}
console.log(reverseArgs2(2,4,6,8,10));


// 3
function reverseArgs3(){
    let reverseArr =[]
    for(i=0; i<arguments.length ; i++){
    reverseArr.push(arguments[i])
    }
    reverseArr.reverse();
    return reverseArr;
}
console.log(reverseArgs3(2,4,6,8,10));
