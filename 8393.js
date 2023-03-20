const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = parseInt(fs.readFileSync(filePath).toString().trim());
let ans = 0;
let arr = [];
for(let i = 1; i<=input; i++){
    arr.push(i)
}
console.log(arr.reduce((a, b) => a+b));
