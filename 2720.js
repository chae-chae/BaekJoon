const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let T = input[0];

for(let i = 1; i<=T; i++){
    let num = input[i];
    let ans = "";
    let Q = 25;
    let D = 10;
    let N = 5;
    let P = 1;
    ans += `${Math.trunc(num/Q)} `;
    num = num % Q;
    ans += `${Math.trunc(num/D)} `;
    num = num % D;
    ans += `${Math.trunc(num/N)} `;
    num = num % N;
    ans += `${Math.trunc(num/P)} `;
    console.log(ans.trim());
}
