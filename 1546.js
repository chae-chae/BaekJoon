const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const subjects = input[1].split(" ").map(Number);

const M = Math.max(...subjects);

let newScore = subjects.map((i) => i/M*100);

let ans = newScore.reduce((acc, cur) => acc + cur);
console.log(ans/N);
