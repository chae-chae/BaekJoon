const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.splice(0, 1);

let as = 100;
let bs = 100;

for(let i = 0; i<input.length; i++){
    let [a, b] = input[i].split(" ").map(Number);
    if(a > b){
        bs -= a;
    } else if(a < b){
        as -= b;
    } else {
        continue;
    }
}

console.log(as);
console.log(bs);
