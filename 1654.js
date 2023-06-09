const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [k, n] = input[0].split(" ").map(Number);
input.splice(0, 1);

const lines = input.map((v) => +v).sort((a, b) => a-b);
let max = Math.max(...lines);
let min = 1;

while(max >= min){
    let mid = Math.floor((max+min) / 2);
    let pieces = lines.map((line) => parseInt(line/mid)).reduce((a, b) => a+b);
    if(pieces >= n){
        min = mid + 1;
    } else {
        max = mid - 1;
    }
}

console.log(max);
