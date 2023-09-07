const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

let ans = 0;
let sum = 0;
for(let i = 0; i<n; i++){
    if(arr[i]){
        sum++;
    } else {
        sum = 0;
    }
    ans += sum;
}

console.log(ans);
