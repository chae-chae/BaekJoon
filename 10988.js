const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

const A = input.join("");
const palindrome = input.reverse().join("");

console.log(A === palindrome ? 1 : 0);
