const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [aa, op, bb] = fs.readFileSync(filePath).toString().trim().split("\n");

let sum = 0n;
let A = BigInt(aa);
let B = BigInt(bb);

if(op === "+"){
    console.log((A + B).toString());
} else {
    console.log((A * B).toString());
}
