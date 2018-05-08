const SLL = require('./SLL');
let sll = new SLL();
sll.insert(6)
sll.insert(5)
sll.insert(4)
sll.insert(3)
sll.insert(2)
sll.insert(1)
console.log(sll.length);

let mergeSortSll = (sll) =>{
    if(sll.length < 2){
        return sll;
    }
    let left = new SLL();
    let right = new SLL();
    let runner = sll.head;
    for(let i = 0; i < sll.length; i++){
        if(i < Math.floor(sll.length / 2)){
            left.insert(runner);
            runner = runner.next;
        }else{
            right.insert(runner);
            runner = runner.next;
        }
    }
    return mergeSLL(mergeSortSll(left), mergeSortSll(right));
}
let mergeSLL = (left, right) =>{

}
mergeSortSll(sll);