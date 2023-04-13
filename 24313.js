const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [aOne, aZero] = input[0].split(" ").map(Number);
let c = parseInt(input[1]);
let nZero = parseInt(input[2]);

let fn = aOne*nZero + aZero;
let gn = c*nZero;

if(fn<=gn && c>= aOne){
    console.log(1);
} else {
    console.log(0);
}
