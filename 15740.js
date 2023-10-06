const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map((v) => BigInt(v));

let ans = a + b;

console.log(ans.toString());
