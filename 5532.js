const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [l, a, b, c, d] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let ans = l - (Math.ceil(a/c) > Math.ceil(b/d) ? Math.ceil(a/c) : Math.ceil(b/d));
console.log(ans);
