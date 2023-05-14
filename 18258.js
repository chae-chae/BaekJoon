const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.splice(0, 1);

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

for(let i = 0; i<n; i++){
    if(input[i].includes("push")){
        let num = input[i].split(" ").map(Number)[1];
        q.push(num);
    } else if(input[i].includes("pop")){
        ans.push(q.pop());
    } else if(input[i].includes("size")){
        ans.push(q.size());
    } else if(input[i].includes("empty")){
        ans.push(q.empty());
    } else if(input[i].includes("front")){
        ans.push(q.front());
    } else if(input[i].includes("back")){
        ans.push(q.back());
    }
}

console.log(ans.join("\n"));
