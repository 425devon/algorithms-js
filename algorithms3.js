/*
//write bubble sort
let bubbleSort = (arr) =>{
    let sorted = true;
    do{
        sorted = false;
        for(let i = 1; i < arr.length; i++){
            if(arr[i-1] > arr[i]){
                let temp = arr[i]
                arr[i] = arr[i-1]
                arr[i-1] = temp
                sorted = true;
            }
        }
    }while(sorted)
    return arr;
}
console.log(bubbleSort([34,6,1,37,8,0]));

//write selection sort
let selectionSort = (arr) =>{
    let pivot = 0;
    let runner;
    while(pivot < arr.length){
        let runner = pivot;
        for(let i = pivot; i < arr.length; i++){
            if(arr[i] < arr[pivot]){
                runner = i;
            }
        }
        let temp = arr[pivot];
        arr[pivot] = arr[runner];
        arr[runner] = temp;
        pivot++
    }
    return arr;
}
console.log(selectionSort([6,5,4,2,1,0]));

//write insertion sort
let insertionSort = (arr) =>{
    for(let i = 0; i < arr.length; i++){
        let temp = arr[i];
        let n = i-1;
        while(n >= 0 && arr[n] > temp){
            arr[n + 1]=  arr[n];
            n--;
        }
        arr[n+1] = temp;
    }
    return arr;
}
console.log(insertionSort([6,5,4,2,1,0]));

//write merge sort
let mergeSort = (arr) =>{
    if(arr.length < 2){
      return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  }
  
  let merge = (left, right) =>{
    let arr =[];
    while(left.length && right.length){
      if(left[0] < right[0]){
        arr.push(left.shift());
      }else{
        arr.push(right.shift());
      }
    }
    return arr.concat(left.concat(right));
  }
  
  let myArr = [12,7,42,5];
  
  console.log(mergeSort(myArr));
*/
//write quicksort
let quickSort = (arr) =>{
    if(arr.length < 2){return arr}
    else{
        let pivot = arr.shift();
        let left = [];
        let right = [];
        while(arr.length > 0){
            if(arr[0] <= pivot){
                left.push(arr.shift());
            }else
            if(arr[0] > pivot){
                right.push(arr.shift());
            }
        }
        return quickSort(left.concat(pivot)).concat(quickSort(right));
    }
}
console.log(quickSort([6,5,4,3,2,1]))