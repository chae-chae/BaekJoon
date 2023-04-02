const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const A = BigInt(input[0]);
const B = BigInt(input[1]);

const ans = (A+B).toString().split("n");
console.log(ans[0]);
