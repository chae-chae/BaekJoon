const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const ans = [];
const n = input[0];

let j = 1;
for(let i = 0; i<n; i++){
    let str = "";
    str += " ".repeat(i);
    str += "*".repeat(2*n-j);
    j += 2;
    ans.push(str);
}

console.log(ans.join("\n"));
