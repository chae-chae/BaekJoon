const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const ans = [];

for(let i = 0; i<input.length-1; i++){
    let num = input[i].reduce((a, b) => a+b);
    ans.push(num);
}

console.log(ans.join("\n"));
