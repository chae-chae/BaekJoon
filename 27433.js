const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

function fac(n){
    if(n === 1) return n;
    return(n*fac(n-1));
}

if(n === 0){
    console.log(1);
    return;
} else {
    console.log(fac(n));
}
