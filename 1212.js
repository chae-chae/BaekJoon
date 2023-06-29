const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let ans = "";

ans = input[0] === "0" ? "0" : parseInt(input[0], 8).toString(2);

for (let i = 1; i < input.length; i++) {
    const bin = parseInt(input[i], 8).toString(2).padStart(3, "0");
    ans += bin;
}

console.log(ans);
