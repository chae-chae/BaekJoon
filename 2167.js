const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
input.splice(0, 1);
let arr = [];

for(let i = 0; i<n; i++){
    let row = input[i].split(" ").map(Number);
    arr.push(row);
}

const k = parseInt(input[n]);
const ans = [];

for(let q = n+1; q<input.length; q++){
    const [i,j,x,y] = input[q].split(" ").map(Number);
    let sum = 0;
    for(let ii = i-1; ii<x; ii++){
        for(let jj = j-1; jj<y; jj++){
            sum += arr[ii][jj];
        }
    }
    ans.push(sum);
}

console.log(ans.join("\n"));
