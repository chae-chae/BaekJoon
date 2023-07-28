const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.splice(0, 1);

const dp = Array(n).fill().map((e) => new Array(3).fill(0));
const [r, g, b] = input[0].split(" ").map(Number);
dp[0][0] = r;
dp[0][1] = g;
dp[0][2] = b;

for(let i = 1; i<n; i++){
    let [r, g, b] = input[i].split(" ").map(Number);
    dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + r;
    dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + g;
    dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + b;
}

console.log(Math.min(...dp[n-1]));
