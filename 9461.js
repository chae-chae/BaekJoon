const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const t = input[0];
input.splice(0, 1);

const ns = [];

for(let i = 0; i<t; i++){
    const n = input[i];
    ns.push(n);
}

const max = Math.max(...ns);

const dp = Array(max+7).fill().map((e) => []);

dp[1] = 1;
dp[2] = 1;
dp[3] = 1;
dp[4] = 2;
dp[5] = 2;

for(let i = 6; i<=max; i++){
    dp[i] = dp[i-5] + dp[i-1];
}

const ans  = [];
ns.forEach((n) => {
    ans.push(dp[n]);
});

console.log(ans.join("\n"));
