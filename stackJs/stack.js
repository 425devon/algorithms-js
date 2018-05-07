module.exports = class Stack{
    constructor(){
        this.data = [];
        this.top = null;
    }
    add(val){
        this.data.push(val);
    }
    remove(){
        return this.data.pop()
    }
    display(){
        for(let i of this.data){
            console.log(i);
        }
    }
}