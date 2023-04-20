const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("").map(Number);

input.sort((a, b) => b-a);
const ans = input.join("");
console.log(ans.trim());
