const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [k, n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let sum = k*n;

if(sum >= m){
    console.log(sum - m);
} else {
    console.log(0);
}
