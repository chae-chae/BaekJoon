const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const testcase = input[0];
input.splice(0, 1);

function isPrime(x){
    if(x === 0 || x === 1){
        return false;
    }
    for(let i = 2; i<=Math.sqrt(x); i++){
        if(x % i === 0){
            return false;
        }
    }
    return true;
}

for(let t = 0; t<testcase; t++){
    let n = input[t];
    while(true){
        if(isPrime(n)){
            console.log(n);
            break;
        } else {
            n++;
        }
    }
}
