const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((v) => BigInt(v));

const n1 = input.splice(0,1);
const first = input.slice(0, n1);
input.splice(0, n1);

const n2 = input.splice(0,1);
const second = input.slice(0, n2);
input.splice(0, n2);

const n3 = input.splice(0,1);
const third = input.slice(0, n3);

let s = [];

s.push(first.reduce((a, b) => a+b));
s.push(second.reduce((a, b) => a+b));
s.push(third.reduce((a, b) => a+b));

for(let i = 0; i<s.length; i++){
    if(s[i] === 0n){
        console.log("0");
    } else if(s[i] > 0n){
        console.log("+");
    } else {
        console.log("-");
    }
}
