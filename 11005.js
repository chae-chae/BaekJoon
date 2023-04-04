const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let N = parseInt(input[0]);
const B = parseInt(input[1]);

let sum = "";

while(N !== 0){
    // console.log(N);
    const newN = Math.trunc(N / B);
    let rem;
    if(N < B){
        rem = N;
    } else {
        rem = N % B;
    }
    // console.log("remain ", rem);
    rem >= 10 ? sum += `${String.fromCharCode(rem+65-10)}` : sum += `${rem}`
    N = newN;
}
let ans = sum.split("").reverse().join("");
console.log(ans);
