const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
input.splice(0, 1);

const stringS = new Set(input.slice(0, n));
const stringM = input.slice(n);

let cnt = 0;

stringM.forEach((i) => {if(stringS.has(i)) cnt++;})

console.log(cnt);
