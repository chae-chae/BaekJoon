const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const tc = parseInt(input[0]);
input.splice(0,1);

let ans = [];

for(let i = 0; i<tc; i++){
    let [c, v] = input[i].split(" ").map(Number);
    const piece = Math.floor(c/v);
    const left = c - piece*v;
    let string = `You get ${piece} piece(s) and your dad gets ${left} piece(s).`;
    ans.push(string);
}

console.log(ans.join("\n"));
