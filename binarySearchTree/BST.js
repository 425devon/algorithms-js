const Node = require('./node');

module.exports = class BST{
    constructor(){
        this.root = null;
    }
    insert(val){
        let node = new Node(val);
        if(!this.root){
            this.root = node;
        }else{
            if(val <= this.root.val){
                if(!this.root.left){
                    this.root.left = node;
                }else{
                    return this.add(node, this.root.left);
                }
            }
            else{
                if(!this.root.right){
                    this.root.right = node;
                }else{
                    return this.add(node, this.root.right);
                }
            }
        }
    }
    add(node, pos){
        if(node.val <= pos.val){
            if(!pos.left){ 
                return pos.left = node 
            }
            else{ 
                return this.add(node, pos.left)
            }
        }else
        if(node.val > pos.val){
            if(!pos.right){ 
                return pos.right = node 
            }
            else{ 
                return this.add(node, pos.right)
            }
        }
    }
    inOrder(node){
        if(node){
            this.inorder(node.left);
            console.log(node.val);
            this.inorder(node.right);
        }
    }
    preOrder(node){
        if(node){
            console.log(node.val);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    postOrder(node){
        if(node){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.val);
        }
    }
}