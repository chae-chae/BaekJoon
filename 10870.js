const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

const fib0 = 0;
const fib1 = 1;

function fib(n){
    if(n === 0) return fib0;
    if(n === 1) return fib1;
    return (fib(n-1) + fib(n-2));
}

console.log(fib(n));
