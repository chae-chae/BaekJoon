const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
let ans = [];

for(let t = 1; t<input.length; t++){
    let a = input[t].split(" ").map(Number).sort((a, b) => b-a);
    ans.push(a[2]);
}

console.log(ans.join("\n"));
