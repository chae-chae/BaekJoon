const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const n = input[0];
const k = input[1];

class Node{
    constructor(item){
      this.item = item;
      this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
  
    push(item){
        const node = new Node(item);
        if(this.head === null){
            this.head = node;
            this.head.next = null;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        this.length++;
    }
  
    pop(){
        if(this.empty() === 1) return -1;
        const popItem = this.head;
        this.head = this.head.next;
        this.length--;
        return popItem.item;
    }
  
    size(){
        return this.length;
    }
  
    empty(){
        if(this.length === 0){
            return 1;
        } else {
            return 0;
        }
    }
  
    front(){
        if(this.empty() === 1) return -1;
        return this.head.item; 
    }
  
    back(){
        if(this.empty() === 1) return -1;
        return this.tail.item; 
    }
}

let q = new Queue();
let ans = [];

for(let i = 1; i<=n; i++){
    q.push(i);
}

while(q.size() > 1){
    for(let i = 1; i<=k-1; i++){
        q.push(q.pop());
    }
    ans.push(q.pop());
}

ans.push(q.pop());

console.log(`<${ans.join(", ")}>`);
