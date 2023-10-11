const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.splice(0,1);

let ans = [];

for(let i = 0; i<input.length; i++){
    let [a, b, c] = input[i].split(" ").map(Number);
    if(a === b && b === c){
        ans.push(10000 + a*1000);
    } else if(a !== b && a !== c && b !== c){
        ans.push(Math.max(a, b, c) * 100);
    } else {
        if(a === b){
            ans.push(1000 + a*100);
        } else if(b === c){
            ans.push(1000 + b*100);
        } else {
            ans.push(1000 + c*100);
        }
    }
}

console.log(Math.max(...ans));
