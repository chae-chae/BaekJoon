const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const tc = parseInt(input[0]);

function fac(num){
    if(num <= 1) return 1;
    return num * fac(num-1);
}

for(let t = 1; t<=tc; t++){
    const [n, m] = input[t].split(" ").map(Number);
    let ans = Math.round(fac(m)/(fac(m-n)*fac(n)));
    console.log(ans);
}
