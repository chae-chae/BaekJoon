const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a,b,c] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const sum = a*b*c;
const nums = sum.toString().split("").map(Number);
const ans = new Array(10).fill(0);

for(let i = 0; i<nums.length; i++){
    ans[nums[i]]++;
}

console.log(ans.join("\n"));
