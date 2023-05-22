const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let cnt = 0;

let deck = [];

for(let i = 0; i<n; i++){
    deck.push(i+1);
}

function one (){
    deck.shift();
}

function two (){
    let temp = deck.shift();
    deck.push(temp);
}

function three (){
    let temp = deck.pop();
    deck.unshift(temp);
}

for(let i = 0; i<m; i++){
    let target = arr[i];
    if(target === deck[0]){
        one();
    } else {
        let idx = deck.indexOf(target);
        let mid = deck.length / 2;
        if(idx <= mid){
            for(let j = 0; j<idx; j++){
                two();
                cnt++;
            }
        } else {
            for(let j = 0; j<deck.length - idx; j++){
                three();
                cnt++;
            }
        }
        one();
    }
}

console.log(cnt);
