const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let blackjack = [];
let sum = 0;
for(let i = 0; i<n; i++){
    for(let j = i+1; j<n; j++){
        for(let k = j+1; k<n; k++){
            sum = arr[i] + arr[j] + arr[k];
            if(sum <= m){
                blackjack.push(sum);
            }
        }
    }
}

console.log(Math.max(...blackjack));
