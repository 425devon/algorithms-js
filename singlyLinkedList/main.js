const SLL = require('./SLL');

let sll = new SLL();
sll.insert(5);
sll.insert(7);
sll.insert(9);
sll.insert(2);
sll.insert(17);
console.log(sll.contains(7));
console.log(sll.remove(7));
console.log(sll.contains(7));
console.log(sll.remove(11));
sll.display();
