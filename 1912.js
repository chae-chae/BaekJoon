const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.splice(0, 1);
input = input[0].split(" ").map(Number);

const dp = [input[0]];

for(let i = 1; i<n; i++){
    dp[i] = Math.max(input[i], dp[i-1] + input[i]);
}

console.log(Math.max(...dp));

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// const n = parseInt(input[0]);
// input.splice(0, 1);
// input = input[0].split(" ").map(Number);

// let res = input[0];

// for(let i = 1; i<n; i++){
//     input[i] = Math.max(input[i], input[i] + input[i-1]);
//     res = Math.max(input[i], res);
// }

// console.log(res);
