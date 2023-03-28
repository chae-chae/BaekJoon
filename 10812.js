const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0].split(" ").map(Number)[0];
const M = input[0].split(" ").map(Number)[1];

let arr = [];
for(let i = 0; i<=N; i++){
    arr.push(i);
}

for(let q = 1; q<=M; q++){
    const i = input[q].split(" ").map(Number)[0];
    const j = input[q].split(" ").map(Number)[1];
    const k = input[q].split(" ").map(Number)[2];
    let beginToMid = arr.slice(i,k);
    let midToEnd = arr.slice(k, j+1);
    // console.log(beginToMid, midToEnd);
    arr.splice(i, midToEnd.length, ...midToEnd);
    arr.splice(i+midToEnd.length, beginToMid.length, ...beginToMid);
}

let ans = "";
arr.map((i) => i > 0 ? ans += `${i} ` : null);
console.log(ans.trim());
