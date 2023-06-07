const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const n = input[0];
let ans = [];

for(let i = 1; i<=n; i++){
    ans.push(i);
}

console.log(ans.join("\n"));
