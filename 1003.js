const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const n = input[0];
input.splice(0, 1);

let max = Math.max(...input);

const fib = [[1, 0], [0, 1]];

for(let i = 2; i<=max; i++){
    fib[i] = [fib[i-1][0] + fib[i-2][0], fib[i-1][1] + fib[i-2][1]];
}

let ans = [];

for(let i = 0; i<n; i++){
    let target = input[i];
    ans.push(fib[target].join(" "));
}

console.log(ans.join("\n"));
