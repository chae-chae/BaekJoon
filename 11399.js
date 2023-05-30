const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const p = input[1].split(" ").map(Number);

const arr = [];
let sum = 0;

p.sort((a, b) => a-b);

for(let i = 0; i<n; i++){
    sum += p[i];
    arr.push(sum);
}

console.log(arr.reduce((a, b) => a+b));
