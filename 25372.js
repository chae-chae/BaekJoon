const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let ans = [];

for(let i = 1; i<input.length; i++){
    if(6 <= input[i].length && input[i].length <= 9) ans.push("yes");
    else ans.push("no");
}

console.log(ans.join("\n"));
