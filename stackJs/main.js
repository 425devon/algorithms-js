const Stack = require('./stack.js');

let test = new Stack();
test.add("Bulbasaur");
test.add("Charmander");
test.add("Squirtle");
test.display();
console.log("Taking out Squirtle");
test.remove();
test.display();