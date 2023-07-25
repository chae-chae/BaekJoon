const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const n = parseInt(input);

const dp = Array(n).fill().map((e) => []);

dp[1] = 1;
dp[2] = 2;

for(let i = 3; i<=n; i++){
    dp[i] = (dp[i-1] + dp[i-2]) % 15746;
}

console.log(dp[n]);
