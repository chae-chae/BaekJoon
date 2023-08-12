const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [d, h, w] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let x = Math.sqrt((d*d)/(h*h + w*w));

let height = Math.floor(h*x);
let width = Math.floor(w*x);

console.log(height, width);
