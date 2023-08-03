function addNumbers (...nums){
    if (nums.length == 0){
        throw new Error('You must pass at least one argument')
    }
    let sum = 0;
    for (let num of nums){
        if (typeof num !== 'number'){
        throw new Error('Arguments must be numbers')
        }
        sum += num
    }

    return sum;
}

// console.log(addNumbers(20,50,'5',6,9)); 
// console.log(addNumbers(20,50,5,6,"hello"));
console.log(addNumbers(20,50,-5,6,9));