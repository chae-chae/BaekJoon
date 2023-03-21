const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);
const v = parseInt(input[2]);

const ans = arr.reduce((acc, cur) => {
    if(cur === v){
        acc++;
    }
    return acc;
}, 0);

console.log(ans);
