const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const sum = [0];

for(let i = 1; i<=n; i++){
    sum[i] = sum[i-1] + arr[i-1];
}

let max = -2000;
for(let i = k; i<=n; i++){
    max = Math.max(max, sum[i] - sum[i-k]);
}

console.log(max);
