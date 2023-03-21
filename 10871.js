const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const nx = input[0].split(" ").map(Number);
const N = nx[0];
const X = nx[1];
const arr = input[1].split(" ").map(Number);

let ans = "";
arr.reduce((acc, cur) => {
    if(cur < X){
        ans += `${cur} `;
    }
}, 0)

console.log(ans.trim());
