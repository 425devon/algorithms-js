const Node = require('./SLLNode.js');

module.exports = class SLL{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    insert(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.length++
        }
        else{
            let runner = this.head;
            while(runner.next){runner = runner.next}
            runner.next = node;
            this.length++;
        }
    }

    contains(val){
        if(this.length = 0 || !this.head){return false}
        else{
            let runner = this.head;
            while(runner.next){
                if(runner.val == val){
                    return true;
                }
                runner = runner.next;
            }
        }
        return false;
    }

    remove(val){
        if(!this.head){console.log("You cannot remove from an empty list")}
        if(this.head.val == val){
            this.head = this.head.next;
            return true
        }
        else{
            let runner = this.head;
            while(runner.next){
                if(runner.next.val == val){
                    let temp = runner.next;
                    runner.next = runner.next.next;
                    return temp;
                }
                runner = runner.next;
            }
            return false;
        }
    }

    display(){
        if(!this.head){console.log('nothing to display'); return false}
        else{
            let runner = this.head;
            while(runner){
                console.log(JSON.stringify(runner) + "\n");
                runner = runner.next;
            }
        }
    }
}