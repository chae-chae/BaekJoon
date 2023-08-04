const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let burgers = input.slice(0, 3);
let drinks = input.slice(3);

console.log(Math.min(...burgers) + Math.min(...drinks) - 50);
