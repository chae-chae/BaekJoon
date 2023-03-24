const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const A = parseInt(input[0].split("").reverse().join(""));
const B = parseInt(input[1].split("").reverse().join(""));
console.log(A > B ? A : B);
