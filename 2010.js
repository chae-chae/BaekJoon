const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let sum = 0;

for(let i = 0; i<n; i++){
    if(i === n-1){
        sum += inputs[i];
        break;
    }
    if(inputs[i] - 1 > 0){
        sum += inputs[i]-1;
    }
}

console.log(sum);
