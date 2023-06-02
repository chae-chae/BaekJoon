const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const arrN = input[1].split(" ").map(Number);
const M = parseInt(input[2]);
const arrM = input[3].split(" ").map(Number);

const ansSet = new Set(arrN);

const ans = arrM.map((i) => ansSet.has(i) ? 1: 0);
console.log(ans.join("\n"));
