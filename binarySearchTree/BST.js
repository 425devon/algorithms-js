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
    getMin(node){
        if(!this.root){
            return null;
        }
        else{
            while(node.left){
                return this.getMin(node.left)
            }
            console.log(node.val)
            return node;
        }
    }
    getMax(node){
        if(!this.root){
            return null;
        }
        else{
            while(node.right){
                return this.getMax(node.right);
            }
            console.log(node.val);
            return node;
        }
    }
    find(val){
        if(!this.root){
            console.log("Empty bst, value not found");
            return null;
        }
        else{
            if(val == this.root.val){
                console.log(`Found node with value ${val}`);
                return this.root;
            }else if(val < this.root.val && this.root.left){
                return this.search(val, this.root.left);
            }else if(val > this.root.val && this.root.right){
                return this.search(val, this.root.right);
            }else{
                console.log(`Did not find ${val} value in tree`);
                return null;
            }
        }
    }
    search(val, node){
        if(val == node.val){
            console.log(`Found ${val} value`);
            return node;
        }else
        if(val < node.val && node.left){
            return this.search(val, node.left);
        }else
        if(val > node.val && node.right){
            return this.search(val, node.right);
        }
        console.log(`${val} value was not found in search`);
        return null;
    }

    findLeftChild(val, node){
        while(node.left){
            if(node.left.val == val){
                return node;
            }else{
                return this.findLeftChild(val, node.left);
            }
        }
        console.log(`left child with value ${val} not found`);
        return;
    }

    findRightChild(val, node){
        while(node.right){
            if(node.right.val == val){
                return node;
            }else{
                return this.findRightChild(val, node.right);
            }
        }
        console.log(`Right child with value ${val} not found`);
        return;
    }
    
    remove(val){
        
    }

    removeNode(val, node){
        
    }
}