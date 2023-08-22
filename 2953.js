const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((v) => v.split(" ").map(Number));

let ans = [];
input.forEach((v) => {
    ans.push(v.reduce((a, b) => a+b));
});

let max = Math.max(...ans);
let num = ans.indexOf(max) + 1;

console.log(num, max);
