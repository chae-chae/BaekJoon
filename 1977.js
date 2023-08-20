const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [m, n] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let ans = [];

for(let i = m; i<=n; i++){
    if(Math.sqrt(i) === Math.floor(Math.sqrt(i))){
        ans.push(i);
    }
}

if(ans.length){
    console.log(ans.reduce((a, b) => a+b));
    console.log(Math.min(...ans));
} else {
    console.log(-1);
}
