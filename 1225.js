const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const a = input[0].split("").map(Number);
const b = input[1].split("").map(Number);

let sum = 0;

for(let i = 0; i<a.length; i++){
    const aa = a[i];
    for(let j = 0; j<b.length; j++){
        const bb = b[j];
        sum += aa*bb;
    }
}

console.log(sum);
