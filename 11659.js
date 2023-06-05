const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const ans = [];
const sum = new Array(arr.length + 1).fill(0);

arr.forEach((v, i) => {
    sum[i+1] = sum[i] + v;
})

for(let q = 2; q<input.length; q++){
    const [i, j] = input[q].split(" ").map(Number);
    ans.push(sum[j] - sum[i-1]);
}

console.log(ans.join("\n"));
