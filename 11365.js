const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let ans = [];

for(let i = 0; i<input.length-1; i++){
    let string = input[i].split("");
    ans.push(string.reverse().join(""));
}

console.log(ans.join("\n"));
