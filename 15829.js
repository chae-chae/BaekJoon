const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [l, input] = fs.readFileSync(filePath).toString().trim().split("\n");

let hash = 0;
let r = 1;
for(let i = 0; i<input.length; i++){
    hash += (input.charCodeAt(i) - 96) * r;
    hash %= 1234567891;
    r *= 31;
    r %= 1234567891;
}

console.log(hash);
