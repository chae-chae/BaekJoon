const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const a = input[1].split(" ").map(Number);
const [b, c] = input[2].split(" ").map(Number);

let ans = 0;

for(let i = 0; i<a.length; i++){
    const target = a[i];
    if(target <= b) ans++;
    else ans += Math.floor((a[i]-b)/c) + ((a[i]-b) % c ? 2 : 1);
}

console.log(ans);
