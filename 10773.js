const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const k = input[0];
input.splice(0, 1);

let arr = [];

for(let i = 0; i<k; i++){
    if(input[i] === 0){
        arr.pop();
    } else {
        arr.push(input[i]);
    }
}

let sum = 0;
arr.forEach((i) => sum += i);

console.log(sum);
