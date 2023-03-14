const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const hm = input[0];
const hmInput = hm.split(" ").map(Number);
const H = hmInput[0];
const M = hmInput[1];
const TIME = parseInt(input[1]);

let convertIntoMinutes = H*60 + M + TIME;
let makeItHourAgain = Math.floor(convertIntoMinutes/60);
let diffMinutes = (convertIntoMinutes - (makeItHourAgain*60))%60;

if(makeItHourAgain >= 24){
    makeItHourAgain = makeItHourAgain - 24;
}
console.log(makeItHourAgain, diffMinutes);
