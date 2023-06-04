const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(i => BigInt(i));

const n = input[0];
const m = input[1];

let money = 0n;
let left = 0n;

money = n / m;
left = n % m;

console.log(String(money));
console.log(String(left));
