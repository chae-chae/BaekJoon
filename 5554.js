const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let sum = input.reduce((a, b) => a+b);

let x = Math.floor(sum / 60);
let y = sum % 60;

console.log(x);
console.log(y);
