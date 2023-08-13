const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, i] = fs.readFileSync(filePath).toString().trim().split(" ").map((v) => parseInt(v));

let ans = ((i-1)*a + 1);

console.log(ans);
