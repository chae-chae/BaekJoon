const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let ans = new Array(26).fill(0);

input.forEach((v) => {
    ans[v.charCodeAt(0) - 97]++;
})

console.log(ans.join(" "));
