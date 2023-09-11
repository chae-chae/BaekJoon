const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let ans = [];

for(let i = 0; i<input.length; i++){
    let string = input.slice(i).join("");
    ans.push(string);
}

ans.sort();

console.log(ans.join("\n"));
