const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const one = 2;
const zero = 4;

const ans = [];

for(let i = 0; i<input.length -1; i++){
    const nums = input[i].split("").map(Number);
    let sum = 0;
    for(let j = 0; j<nums.length; j++){
        if(nums[j] === 1){
            sum += one;
        } else if(nums[j] === 0){
            sum += zero;
        } else {
            sum += 3;
        }
    }
    sum += nums.length + 1;
    ans.push(sum);
}

console.log(ans.join("\n"));
