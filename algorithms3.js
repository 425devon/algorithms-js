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
*/
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


  