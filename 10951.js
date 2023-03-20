const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.map(i => i.split(" ").map(Number).reduce((a, b) => {console.log(a+b);}))
