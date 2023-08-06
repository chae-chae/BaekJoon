const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const fi = Math.PI;
const r = input;

console.log((r*r*fi).toFixed(6));
console.log((2*r*r).toFixed(6));
