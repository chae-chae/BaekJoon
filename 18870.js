const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.splice(0,1);

let xn = input[0].split(" ").map(Number);

let ans = "";
let arr = Array.from(new Set(xn)).sort((a,b) => a-b);
let obj = {};

arr.forEach((i, idx) => obj[i] = idx);

for(let i = 0; i<n; i++){
    ans += `${obj[xn[i]]} `;
}

console.log(ans.trim());
