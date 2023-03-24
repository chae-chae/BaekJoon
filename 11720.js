const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const nums = input[1].split("").map(Number);

console.log(nums.reduce((acc, cur) => acc + cur));
