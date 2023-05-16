const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
let ans = [];

for(let i = 1; i<=n; i++){
    let [a, b] = input[i].split(" ").map(Number);
    let pow = 1;
    for(let j = 0; j<b; j++){
        pow = (pow*a) % 10;
    }
    pow === 0 ? ans.push(10): ans.push(pow);
}

console.log(ans.join("\n"));
