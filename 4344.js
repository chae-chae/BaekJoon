const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const C = parseInt(input[0]);

for(let i = 1; i<=C; i++){
    let arr = input[i].split(" ").map(Number);
    const N = arr[0];
    let sum = 0;
    for(let j = 1; j<=N; j++){
        sum += arr[j]; // sum
    }
    let avg = sum / N;
    let smarty = 0;
    for(let j = 1; j<=N; j++){
        if(arr[j]>avg){
            smarty++;
        }
    }
    let ans = (smarty/N *100).toFixed(3);
    console.log(`${ans}%`);
}
