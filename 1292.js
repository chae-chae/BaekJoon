const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let sum = 0;

const arr = [];

for(let i = 1; i<=47; i++){
    for(j = 0; j<i; j++){
        arr.push(i);
    }
}

arr.unshift(0);

for(let i = a; i<=b; i++){
    sum += arr[i];
}

console.log(sum);
