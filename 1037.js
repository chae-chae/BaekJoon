const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
let dividers = input[1].split(" ").map(Number);

let min = Math.min(...dividers);
let max = Math.max(...dividers);

console.log(min*max);
