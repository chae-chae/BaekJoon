const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.splice(0, 1);

let cur = 1;

for(let i = 0; i<n; i++){
    let [x, y] = input[i].split(" ").map(Number);
    if(x === cur){
        cur = y;
    } else if(y === cur){
        cur = x;
    } else {
        ;
    }
}

console.log(cur);
