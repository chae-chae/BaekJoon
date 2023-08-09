const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const odds = [];

input.forEach((v) => {
    if(v%2){
        odds.push(v);
    }
});

if(odds.length){
    console.log(odds.reduce((a, b) => a+b));
    console.log(Math.min(...odds));
} else {
    console.log(-1);
}
