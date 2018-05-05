/*
//Write a program that would print all the numbers from 1 to 255
let printStuff = (stuff) => {
    for(let i = 0; i <= stuff; i++){
        console.log(i);
    }
}

//Write a program that would print all the odd numbers from 1 to 1000
let printOdds = (num) =>{
    for(let i = 0; i <= num; i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}

printOdds(1000);

//Write a program that would print the sum of all the odd numbers from 1 to 5000
let printOddSum = (num) =>{
    let sum = 0;
    for(let i = 0; i <= num; i++){
        if(i % 2 !== 0){
            sum += i;
        }
    }
    return sum;
}

console.log(printOddSum(5000));

//Given an array X say [1,3,5,7,9,13], write a program that would iterate through each member of the array and print each value 
let printArr = (arr) =>{
    for(let i of arr){
        console.log(i);
    }
}

printArr([12,9,2,'cat',4,'rabbit']);

//Given an array with multiple values (e.g. [-3, 3, 5, 7]), write a program that prints the maximum number in the array. 
let findMax = (arr) =>{
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){ max = arr[i] }
    }
    return max;
}

console.log(findMax([2,34,645,1,3,443]));

//Given an array with multiple values (e.g. [1,3,5,7,20]), write a program that prints the average of the values in the array.
let findAvg = (arr) =>{
    let avg = 0;
    for(let i of arr){ avg += i }
    return avg/arr.length;
}

console.log(findAvg([2,4,6,8,10]));

//Write a program that creates an array 'Y' that contains all the odd numbers between 1 to 255.
let oddArr = () =>{
    let oArr = [];
    for(let i = 1; i <= 255; i+=2){ oArr.push(i) };
    return oArr;
}
console.log(oddArr());

//Write a program that takes an array and returns the number of values in that array whose value is greater than y.
let greaterThan = (arr,y) =>{
    let res = [];
    for(let i of arr){
        if(i > y){
            res.push(i);
        }
    }
    return res;
}
console.log(greaterThan([23,10,45,12,5,35], 23));

let sqrArr = (arr) =>{
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
console.log(sqrArr([1,2,3,4,5,6,7,8,9,10]));

//Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that replaces any negative number with the value of 0. 
let noNeg = (arr) =>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){ arr[i] = 0 }
    }
    return arr;
}
console.log(noNeg([12,-12,45,-45,0,56,-56]));

//Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that prints the maximum number in the array,
// minimum value in the array as well as the average values in the array. 
let minMaxAvg = (arr) =>{
    let mma ={
        min : arr[0],
        max : arr[0],
        sum : 0,
        avg : null
    }
    for(let i = 0; i < arr.length; i++){
        mma.sum += arr[i];
        if(arr[i] < mma.min){ mma.min = arr[i] }
        else 
        if(arr[i] > mma.max){ mma.max = arr[i] }
    }
    mma.avg = (mma.sum / arr.length);
    return mma;
}
console.log(minMaxAvg([12,43,56,78,9,2,1]));

//Given an array x (e.g. [1,5, 10, 7, -2]), create an algorithm (sets of instructions) that shifts each number by one (to the front). 
let shiftArr = (arr) =>{
    arr.push(arr[0]);
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1];
    }
    arr.pop();
    return arr;
}
console.log(shiftArr([1,2,3,4,5]));

//Write a program that takes an array of numbers and replaces any number that's negative to a string called 'Dojo'.
let dojoArr = (arr) =>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}
console.log(dojoArr([1,2,-3,4,-4]));

//Create an array X and fill the array with 10 values, each value being a random integer between 0 to 100.
let randArr = () =>{
    let arr = [];
    for(let i = 0; i<=  10; i++){ arr[i]= Math.floor(Math.random()*101) }
    return arr;
}
console.log(randArr());

//Write a program that takes an array of numbers and returns an array where the first and last numbers in the array have been switched
let switcheroo = (arr) =>{
    let temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
    return arr;
}
console.log(switcheroo([1,2,3,4,5]));

//Reverse an array in place
let reverseArr = (arr) =>{
    for(let i = 0; i <= Math.floor(arr.length /2 ); i++){
        let temp = arr[i];
        arr[i] = arr[(arr.length-1) - i]
        arr[(arr.length-1) - i] = temp;
    }
    return arr;
}
console.log(reverseArr([1,2,3,4,5,6,7,8,9]))

//insert x at position y
let insertArr = (x,y,arr) =>{
    if(y > arr.length){
        arr[y] = x;
    }
    else{
        let temp = arr[y];
        arr[y] = x;
        for(let i = y+1; i < arr.length; i++){
            let cur = arr[i];
            arr[i] = temp;
            temp = cur;
        }
    }
    return arr;
}
console.log(insertArr(99,2,[1,2,3,4,5,6,7,8,9]))

*/
//write a program that removes any negative values in that array. the array should be composed of only the non-negative numbers, in their original order

let removeNeg = (arr) =>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = arr[i+1]
            for(let n = i; n < arr.length; n++){
                arr[n] = arr[n+1]
            }
            arr.pop()
        }
    }
    return arr;
}
console.log(removeNeg([1,2,-3,3,4,-5,6,7]))