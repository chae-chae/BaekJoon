const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);

if(N===1){
    console.log(0);
    return;
}

let coord = [];

for(let i = 1; i<=N; i++){
    coord.push(input[i].split(" ").map(Number));
}

let x = [];
let y = [];

for(let i = 0; i<N; i++){
    x.push(coord[i][0]);
    y.push(coord[i][1]);
}

let maxX = Math.max(...x);
let minX = Math.min(...x);
let maxY = Math.max(...y);
let minY = Math.min(...y);

console.log((maxX-minX)*(maxY-minY));
