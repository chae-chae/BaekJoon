const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let sum = input[0];
let ans = 0;

for(let i = 1; i<input.length; i++){
    sum += input[i];
    if(sum >= 100){
        let a = Math.abs(sum - 100);
        let b = Math.abs(sum - input[i] - 100);
        if(a === b){
            ans = sum;
        } else if(a > b){
            ans = sum - input[i];
        } else {
            ans = sum;
        }
        break;
    }
    ans = sum;
}

console.log(ans);
