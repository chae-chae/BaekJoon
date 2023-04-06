const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const x = parseInt(input);

let sum = 0;
let index = 0;
for(let i = 0; x > sum; i++){
    sum = sum + i;
    index = i;
}

let startFromOne = null;

if(index === 1){
    startFromOne = true;
} else if(index % 2 === 0){
    startFromOne = true;
} else {
    startFromOne = false;
}

let ans = "";
if(startFromOne === true){
    let start = sum-index + 1;
    let order = x - start;
    let frontnum = 1 + order;
    let backnum = index - order;
    ans = `${frontnum}/${backnum}`
} else {
    let start = sum-index + 1;
    let order = x - start;
    let frontnum = 1 + order;
    let backnum = index - order;
    ans = `${backnum}/${frontnum}`
}

console.log(ans);
