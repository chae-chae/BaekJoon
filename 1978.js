const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
let arr = input.slice(1).toString().trim().split(" ").map(Number);

let cnt = 0;

for(let i = 0; i<N; i++){
    if(arr[i] === 1) continue;
    let isSosu = 0;
    for(let j = 1; j<=arr[i]; j++){
        if(arr[i] % j === 0){
            isSosu++;
        }
    }
    if(isSosu <= 2) cnt++;
}
console.log(cnt);
