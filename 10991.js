const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let j = n;
let ans = [];

for(let i = 1; i<=n; i++){
    let space = " ".repeat(j-i);
    let star = "* ".repeat(i);
    ans.push(space + star);
}

console.log(ans.join("\n"));
