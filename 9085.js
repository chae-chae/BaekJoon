const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.splice(0, 1);

let ans = [];

for(let i = 1; i<n*2; i+=2){
    let arr = input[i].split(" ").map(Number);
    let sum = arr.reduce((a, b) => a+b);
    ans.push(sum);
}

console.log(ans.join("\n"));
