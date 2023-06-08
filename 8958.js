const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const tc = Number(input[0]);
input.splice(0,1);

let score = 0;
let sum = 0;
const ans = [];

for(let i = 0; i<tc; i++){
    const string = input[i];
    for(let j = 0; j<string.length; j++){
        if(string[j] === "O"){
            score++;
            sum += score;
        } else {
            score = 0;
        }
    }
    ans.push(sum);
    sum = 0;
    score = 0;
}

console.log(ans.join("\n"));
