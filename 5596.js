const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [mins, mans] = fs.readFileSync(filePath).toString().trim().split("\n").map((v) => v.split(" ").map(Number));

console.log(mins.reduce((a, b) => a+b) >= mans.reduce((a, b) => a+b) ? mins.reduce((a, b) => a+b) : mans.reduce((a, b) => a+b));
