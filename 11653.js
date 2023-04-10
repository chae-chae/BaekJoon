const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let N = parseInt(input);
if(N === 1) return;

let i = 2;
while(N !== 1){
    if(N % i === 0){
        console.log(i);
        N /= i;
    } else {
        i++;
    }
}
