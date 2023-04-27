const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let arr = [];

for(let i = n; i<=m; i++){
    if(i === 1) continue;
    let isPrime = true;
    for(let a = 2; a<=Math.sqrt(i); a++){
        if(i % a === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        arr.push(i);
    }
}

console.log(arr.join("\n"));
