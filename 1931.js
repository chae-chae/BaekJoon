const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const times = [];

for(let i = 1; i<=n; i++){
    times.push(input[i].split(" ").map(Number));
}
times.sort((a, b) => a[0] - b[0]);
times.sort((a, b) => a[1] - b[1]);

let tmp = times[0][1];
let cnt = 1;

for(let i = 1; i<n; i++){
    if(tmp <= times[i][0]){
        tmp = times[i][1];
        cnt++;
    }
}

console.log(cnt);
