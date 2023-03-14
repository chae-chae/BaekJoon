const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const H = input[0];
const M = input[1];
let diffM;
let newM;
let newH;

if(M<45){
    diffM = Math.abs(M-45);
    newM = 60-diffM;
    newH = H-1;
    if(newH<0){
        newH = 23;
    }
} else {
    newM = M-45;
    newH = H;
}

console.log(newH, newM);
