const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let N = parseInt(input);

let i = 1;
let room = 1;

while(room < N){
    room += 6*i;
    i++;
}

console.log(i);
