
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
console.log(bubbleSort([34,6,1,37,8,0]))