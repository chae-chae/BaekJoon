const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const ans = [];

let sum = 0;

for(let i = 0; i<input.length; i++){
    let [off, on] = input[i];
    if(i === 0){
        sum += on;
        ans.push(sum);
        continue;
    }
    sum -= off;
    ans.push(sum);
    sum += on;
    ans.push(sum);
}

console.log(Math.max(...ans));
