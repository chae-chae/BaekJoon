const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((v) => BigInt(v));

const n = input[0];
const bigintzero = BigInt(0);
const bigintone = BigInt(1);

if(n === bigintzero){
    console.log(0);
    return;
}

const fact = (n) => {
    if(n === bigintone) return n;
    return(n * fact(n-bigintone));
}

let num = fact(n);
const arr = num.toString().split("").reverse();
let cnt = 0;

for(let i = 0; i<arr.length; i++){
    if(arr[i] === "0"){
        cnt++;
    } else {
        break;
    }
}

console.log(cnt);
