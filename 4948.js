const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

input.splice(input.length-1, 1);

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

input.forEach((n) => {
    let cnt = 0;
    for(let i = n+1; i<=2*n; i++){
        if(isPrime(i)){
            cnt++;
        }
    }
    console.log(cnt);
})
