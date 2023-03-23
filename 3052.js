const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let arr = [];

for(let i = 0; i<10; i++){
    arr[i]= input[i] % 42;
}

let ans = Array.from(new Set(arr));

console.log(ans.length);
