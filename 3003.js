const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let arr = [1,1,2,2,2,8];
let ans = "";
for(let i = 0; i<arr.length; i++){
    ans += `${arr[i] - input[i]} `;
}

console.log(ans.trim());
