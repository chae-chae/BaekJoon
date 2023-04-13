const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const n = parseInt(input);
let cnt = 0;

let arr = [];
function mop(arr, n){
    let sum = 0;
    for(let i = 1; i<=n; i++){
        sum = sum + i;
        cnt++;
    }
    return sum;
}

mop(arr, n);
console.log(cnt);
console.log(1);
