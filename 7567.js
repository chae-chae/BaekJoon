const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let sum = 10;
let stack = input[0];

for(let i = 1; i<input.length; i++){
    let plate = input[i];
    if(plate === stack){
        sum += 5;
    } else {
        sum += 10;
    }
    stack = input[i];
}

console.log(sum);
