const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let arr = [];
for(let i = input[0]; i<=input[1]; i++){
    arr.push(i);
}

let sosus = [];

for(let i = 0; i<arr.length; i++){
    if(arr[i] === 1) continue;
    let isSosu = 0;
    for(let j = 1; j<=arr[i]; j++){
        if(arr[i] % j === 0){
            isSosu++;
        }
    }
    if(isSosu <= 2){
        sosus.push(arr[i]);
    }
}
if(sosus.length === 0){
    console.log(-1);
} else {
    console.log(sosus.reduce((acc, cur) => acc+cur));
    console.log(sosus[0]);
}
