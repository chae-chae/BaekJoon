const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const ans = (a+b)*(a-b);

console.log(ans);
