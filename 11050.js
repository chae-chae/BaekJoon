const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const n = input[0];
const k = input[1];

let nq = 1;
for(let i = 1; i<=n; i++){
    nq *= i;
}

let nmrq = 1;
for(let i = 1; i<=n-k; i++){
    nmrq *= i;
}

let rq = 1;
for(let i = 1; i<=k; i++){
    rq *= i;
}

let ans = nq / (nmrq * rq);
console.log(ans);
