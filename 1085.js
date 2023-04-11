const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [x, y, w, h] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let A = w-x;
let B = h-y;
let C = Math.sqrt((w-x)**2 +(h-y)**2);
let D = x;
let E = y;

console.log(Math.min(A,B,C,D,E));
