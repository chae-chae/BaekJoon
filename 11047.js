const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
input.splice(0, 1);
const costs = input.map(Number);
let cnt = 0;
let sum = 0;
let idx = 0;

costs.map((i, index) => {
    if(i<=k){
        idx = index;
    }
});

for(let i = idx; i>=0; i--){
    while(sum < k){
        if(sum + costs[i] > k) break;
        sum += costs[i];
        cnt++;
    }
}

console.log(cnt);
