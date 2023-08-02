const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const n = input[0];
input.splice(0, 1);

let max = Math.max(...input);

const dp = [0, 1, 2, 4];

for(let i = 4; i<=max; i++){
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
}

for(let i = 0; i<n; i++){
    let target = input[i];
    console.log(dp[target]);
}
