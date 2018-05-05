/*
// iSum that behaves just like rSum but instead of using recursion to implement the solution it uses iteration.
let iSum = (n) =>{
    sum = 0;
    while(n > 1){
        sum += n;
        n--
    }
    return sum + 1;
}
console.log(iSum(5));

//Write a recursive factorial 
let rFact = (n) =>{
    if(n == 1){
        return 1;
    }
    return n * rFact(n-1);
}
console.log(rFact(5));

//Write recursive fibonacci
let rFib = (n) =>{
    if(n == 0){
        return 0;
    }else
    if(n < 3){
        return 1;
    }else{
        return rFib(n-1) + rFib(n - 2);
    }
}
console.log(rFib(6));

//rBS takes in an array and a value to search for. If the value is found within the array then rBS will return 
//the index where the found value is. If the value is not found within the array then rBS returns false. 
let rBs = (arr, key, min, max) =>{
    let mid = Math.floor((min + max) / 2);
    if(key > arr[arr.legnth-1]){return false};
    if(min > max){return false};
    if(arr[mid] == key){
        return mid;
    }
    else
    if(key < arr[mid]){
        return rBs(arr, key, min, mid-1);
    }
    else
    if(key > arr[mid]){
        return rBs(arr, key, mid+1, max);
    }
    else{
        return false;
    }
}
let test = [0,1,2,3,4,5,6,7,8,9];
console.log(rBs(test, 6, 0, test.length-1));
console.log(rBs(test, 21, 0, test.length-1));
console.log(rBs(test, -6, 0, test.length-1));
*/
//Same as above but iterative
let iBs = (arr, key) =>{
    if(key > arr[arr.length-1]){return false};
    let min = 0;
    let max = arr.length-1;
    while(min < max){
        let mid = Math.floor((min + max) / 2);
        if(key == arr[mid]){return mid}
        else{
            if(key < arr[mid]){
                max = mid;
            }
            else
            if(key > arr[mid]){
                min = mid+1;
            }
        }
    }
    return false;
}
let test = [0,1,2,3,5,6,7,8,9];
console.log(iBs(test, 1));
console.log(iBs(test, 6));
console.log(iBs(test, 10));
console.log(iBs(test, 4));

/*
24 + 8;
0000 0000 0001 1000
0000 0000 0000 1000
-------------------
0000 0000 0010 0000

24 - 8;
0000 0000 0001 1000
0000 0000 0000 1000
-------------------
0000 0000 0001 0000

24 OR 8
0000 0000 0001 1000
0000 0000 0000 1000
-------------------
0000 0000 0001 1000

=> 24

x y x|y
0 0 0
1 0 1
0 1 1
1 1 1

24 and 8

0000 0000 0001 1000
0000 0000 0000 1000
-------------------
0000 0000 0000 1000

=> 8

x y x&y
0 0 0
1 0 0
0 1 0
1 1 1

24 XOR 8

0000 0000 0001 1000
0000 0000 0000 1000
-------------------
0000 0000 0001 0000

=> 16

x y x^y
0 0 0
1 0 1
0 1 1
1 1 0

24 >> 2

0000 0000 0001 1000
-------------------
0000 0000 0000 0011

=> 3

24 << 2

0000 0000 0001 1000
-------------------
0000 0000 0110 0000

=> 96

NOT 24

0000 0000 0001 1000
-------------------
1111 1111 1110 0111
-------------------
0000 0000 0001 1000
0000 0000 0000 0001
-------------------
0000 0000 0001 1001

=> -25
*/