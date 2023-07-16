const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const n = parseInt(input);

if(n === 0){
    console.log(0);
    return;
} else if(n === 1){
    console.log(1);
    return;
} else if(n === 2){
    console.log(1);
    return;
}

let fib = [0n, 1n, 1n];

for(let i = 2; i<=n; i++){
    fib[i] = BigInt(fib[i-1]) + BigInt(fib[i-2]);
}

console.log(fib[n].toString());
