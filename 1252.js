const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const a = input[0].split("").map(Number).reverse();
const b = input[1].split("").map(Number).reverse();

let sum = 0n;

for(let i = 0; i<a.length; i++){
    sum += BigInt(Math.pow(2, i) * a[i]);
}

for(let i = 0; i<b.length; i++){
    sum += BigInt(Math.pow(2, i) * b[i]);
}

console.log(sum.toString(2));
