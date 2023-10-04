const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const n = parseInt(input);

let ans = [];

for(let i = 0; i<n; i++){
    ans.push(`Hello World, Judge ${i+1}!`);
}

console.log(ans.join("\n"));
