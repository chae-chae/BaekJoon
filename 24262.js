const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const n = parseInt(input);
let cnt = 0;

let arr = [];
function mop(arr, n){
    let i = Math.floor(n/2);
    cnt++;
    return arr[i];
}

mop(arr, n);
console.log(cnt);
console.log(0);
