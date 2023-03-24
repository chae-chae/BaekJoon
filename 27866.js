const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let S = input[0];
let i = parseInt(input[1]);

let arr = S.split("");

console.log(arr[i-1]);
