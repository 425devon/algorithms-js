const SLL = require('./SLL');
let sll = new SLL();
sll.insert(6)
sll.insert(5)
sll.insert(4)
sll.insert(3)
sll.insert(2)
sll.insert(1)
sll.display();

let mergeSortSll = (sll) =>{
    if(sll.length < 2){
        return sll;
    }
    return mergeSLL(mergeSortSll(left), mergeSortSll(right));
}


let mergeSLL = (left, right) =>{

}
