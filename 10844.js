const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const n = input;

const dp = Array.from(new Array(n+1), () => new Array(10));

dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
dp[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1];

for(let i = 3; i<=n; i++){
    for(let j = 0; j<10; j++){
        if(j === 0) dp[i][j] = dp[i-1][j+1] % 1000000000;
        else if(j === 9) dp[i][j] = dp[i-1][j-1] % 1000000000;
        else dp[i][j] = ( dp[i-1][j-1] + dp[i-1][j+1] ) % 1000000000;
    }
}

let sum = 0;
for(let i = 0; i<10; i++){
    sum += dp[n][i];
}

console.log(sum % 1000000000);
