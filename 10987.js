const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let ans = 0;

for(let i = 0; i<input.length; i++){
    if(input[i].includes("a") || input[i].includes("e") || input[i].includes("i") || input[i].includes("o") || input[i].includes("u")) ans++;
}

console.log(ans);
