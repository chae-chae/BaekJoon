const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let ah = Math.floor(input[0] / 100) * 100;
let at = Math.floor((input[0] - ah) / 10) * 10;
let ao = input[0] - ah - at;

let bh = Math.floor(input[1] / 100) * 100;
let bt = Math.floor((input[1] - bh) / 10) * 10;
let bo = input[1] - bh - bt;

//console.log(ah, at, ao);
//console.log(bh, bt, bo);

let ans3 = bo*ah + bo*at + bo*ao;
console.log(ans3);

let ans4 = bt*ah + bt*at + bt*ao;
console.log(ans4/10);

let ans5 = bh*ah + bh*at + bh*ao;
console.log(ans5/100);

console.log(input[0] * input[1]);
