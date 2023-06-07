const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const pow = (num) => num*num;
const confirm = (num) => num % 10;

let sum = 0;

input.forEach((v) => sum += pow(v));
console.log(confirm(sum));
