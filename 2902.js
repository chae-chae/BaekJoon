const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("-");

let ans = [];

input.forEach((v) => {
    ans.push(v[0]);
});

console.log(ans.join(""));
