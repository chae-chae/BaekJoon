const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = parseInt(input[0]);
const arr = input.slice(1,T+1);
const strings = [];
const res = arr.map(i => i.split(" ").map(Number).reduce((a, b)=> {
    strings.push(`${a} + ${b}`);
    return a+b;
}));
let ans = "";
res.map((i,idx) => ans += `Case #${idx+1}: ${strings[idx]} = ${i}\n`);
console.log(ans)
