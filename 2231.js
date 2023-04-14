const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const ns = input.split("");
const n = parseInt(input);
let sum = 0;
let ans = 0;

for(let i = 1; sum<=n+n; i++){
    sum = 0;
    let string = i.toString().trim().split("");
    string.map((i) => {
        sum += parseInt(i);
    })
    sum += i;
    if(sum === n){
        ans = string.join("");
        break;
    }
}

console.log(`${n === sum ? ans : 0}`);
