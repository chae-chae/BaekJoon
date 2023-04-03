const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
let arr = input.slice(1);

const paper = Array.from(new Array(100), () => new Array(100).fill(0));

for(let i = 0; i<N; i++){
    const [x,y] = arr[i].split(" ").map(Number);
    for(let row = x; row<x+10; row++){
        for(let col = y; col<y+10; col++){
            paper[row][col] = 1;
        }
    }
}

let ans = 0;

for(let i = 0; i<100; i++){
    for(let j = 0; j<100; j++){
        if(paper[i][j] === 1) ans++;
    }
}

console.log(ans);
