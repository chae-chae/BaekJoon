const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const total = parseInt(input[0]);
const N = parseInt(input[1]);
const arr = input.slice(2,N+2);
const res = arr.map(i => i.split(" ").map(Number).reduce((a, b)=> a*b));

console.log(res.reduce((a, b) => a+b) === total? "Yes" : "No")
