const BST = require('./BST.js');

let bst = new BST();

bst.insert(10)
bst.insert(8)
bst.insert(12)
bst.insert(6)
bst.insert(7)
bst.insert(22)
bst.insert(10)


//bst.inorder(bst.root);
//bst.preOrder(bst.root);
bst.postOrder(bst.root);