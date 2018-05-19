const SLL = require('./SLL');
let sll = new SLL();
sll.insert(6)
sll.insert(5)
sll.insert(4)
sll.insert(3)
sll.insert(2)
sll.insert(1)
//

let mergeSortSll = (sll) =>{
    if(sll.length < 2){
        return sll;
    }
    let left = new SLL();
    let right = new SLL();
    let runner = sll.shift();
    let length = sll.length;

    for(let i = 0; i<=length; i++){
        if(i <= Math.floor(length/2)){
            left.insert(runner.val)
        }else{
            right.insert(runner.val);
        }
        runner = sll.shift();
    }
    return mergeSLL(mergeSortSll(left), mergeSortSll(right));
}


let mergeSLL = (left, right) =>{
    let output = new SLL();
    while(left.length > 0 && right.length > 0){
        if(left.head.val <= right.head.val){
            output.insert(left.shift().val);
        }
        output.insert(right.shift().val);
    }
    while(left.length > 0){
        output.insert(left.shift().val);
    }
    while(right.length > 0){
        output.insert(right.shift().val);
    }
    return output;

}

sll.display();
console.log("*********")
let sorted = mergeSortSll(sll);
sorted.display();

