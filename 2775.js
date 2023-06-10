const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tc, ...cases] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let ans = [];

for(let t = 0; t<tc*2; t+=2){
    const k = cases[t];
    const n = cases[t+1];
    let arr = new Array(k+1).fill(new Array(n).fill(0));
    for(let i = 0; i<k; i++){
        for(let j = 0; j<n; j++){
            arr[i][j] = j+1;
        }
    }
    for(let i = 1; i<=k; i++){
        arr[i][0] = 1;
        for(let j = 1; j<n; j++){
            arr[i][j] = arr[i][j-1] + arr[i-1][j];
        }
    }
    ans.push(arr[k][n-1]);
}

console.log(ans.join("\n"));
