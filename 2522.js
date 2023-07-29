const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);

let ans = [];

for(let i = 1; i<=n; i++){
    let str = "";
    str += " ".repeat(n-i);
    str += "*".repeat(i);
    ans.push(str);
}

for(let i = 1; i<n; i++){
    let str = "";
    str += " ".repeat(i);
    str += "*".repeat(n-i);
    ans.push(str);
}

console.log(ans.join("\n"));
