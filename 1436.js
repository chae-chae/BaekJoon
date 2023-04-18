const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const n = parseInt(input);
const word = "666";
let cnt = 0;
let sentence = "";
let sum = 655;
for(let i = 1; cnt<n; ){
    sum += i;
    sentence = sum.toString();
    if(sentence.includes(word)){
        cnt++;
    }
}

console.log(sentence);
