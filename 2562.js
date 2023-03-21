const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let index = 0;

let max = input.reduce((acc, cur, idx) => {
    if(acc < cur){
        index = idx;
        acc = cur;
    }
    return acc;
}, 0)

console.log(max);
console.log(index+1);
