const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const n = parseInt(input);

if(n === 0){
    console.log(1);
    return;
} else {
    let sum = 1;
    for(let i = n; i>=1; i--){
        sum *= i;
    }
    console.log(sum);
}
