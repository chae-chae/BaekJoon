const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b] = fs.readFileSync(filePath).toString().trim().split("\n").map((b) => BigInt(b));

const ans = [];

ans.push(a+b);
ans.push(a-b);
ans.push(a*b);

console.log(ans.join("\n"));
