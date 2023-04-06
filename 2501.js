const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const N = input[0];
const K = input[1];

let arr = [];
for(let i = 1; i<=N; i++){
    if(N % i === 0){
        arr.push(i);
    }
}

if(arr.length < K){
    console.log(0);
} else {
    console.log(arr[K-1]);
}
