const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const files = input[1].split(" ").map(Number);
const cluster = parseInt(input[2]);

let ans = 0;

for(let i = 0; i<n; i++){
    if(files[i] === 0) continue;
    if(files[i] <= cluster){
        ans += cluster;
    } else {
        let piece = Math.ceil(files[i] / cluster);
        ans += cluster*piece;
    }
}

console.log(ans);
