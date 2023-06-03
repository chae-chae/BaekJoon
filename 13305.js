const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const dist = input[1].split(" ").map(i => BigInt(i));
const costs = input[2].split(" ").map(i => BigInt(i));

let curPrice = costs[0];
let cost = 0n;

for(let i = 0; i<N-1; i++){
    cost += curPrice * dist[i];
    if(curPrice > costs[i+1]) curPrice = costs[i+1];
}

console.log(String(cost));
