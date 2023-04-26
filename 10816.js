const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const m = parseInt(input[2]);
let sang = input[1].split(" ").map(Number);
let arr = input[3].split(" ").map(Number);

let obj = {};
let ans = [];

for(let i = 0; i<n; i++){
    obj[sang[i]] ? obj[sang[i]]++ : obj[sang[i]] = 1;
}

for(let i = 0; i<m; i++){
    obj[arr[i]] ? ans.push(obj[arr[i]]) : ans.push(0);
}

console.log(ans.join(" "));
