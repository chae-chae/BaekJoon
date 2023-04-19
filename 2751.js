const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

input.splice(0,1);

input.sort((a, b) => a-b);
const ans = input.join("\n");
console.log(ans.trim());
