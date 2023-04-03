const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let longestRow = 0;
for(let i = 1; i<5; i++){
    if(input[longestRow].length < input[i].length){
        longestRow = i;
    }
}

let longestRowLength = input[longestRow].length;
// console.log(longestRowLength);

let ans = "";
for(let i = 0; i<longestRowLength; i++){
    for(let j = 0; j<5; j++){
        if(input[j][i] === undefined) continue;
        ans += `${input[j][i]}`;
    }
}

console.log(ans);
