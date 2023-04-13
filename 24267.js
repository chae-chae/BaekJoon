const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const n = BigInt(input);

console.log(`${(n*(n-BigInt(1))*(n-BigInt(2))/BigInt(6))}`);
console.log(3);
