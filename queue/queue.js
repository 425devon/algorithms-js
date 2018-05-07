module.exports = class Queue{
    constructor(){
        this.data = [];
        this.size = this.data.length;
    }

    enqueue(val){
        this.data.push(val);
    }
    dequeue(){
        return this.data.shift();
    }
    display(){
        for(let i of this.data){
            console.log(i);
        }
    }
}