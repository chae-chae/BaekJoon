const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const ans = [];

for(let i = 0; i<input.length-1; i++){
    let nums = input[i].split("").map(Number);
    let rev = input[i].split("").map(Number);
    rev.reverse();
    if(nums.toString() === rev.toString()){
        ans.push("yes");
    } else {
        ans.push("no");
    }
}

console.log(ans.join("\n"));
