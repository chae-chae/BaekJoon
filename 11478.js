const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let s = fs.readFileSync(filePath).toString().trim();

let strings = [];

for(let i = 1; i<=s.length; i++){
    for(let j = 0; j<=s.length - i; j++){
        strings.push(s.slice(j, j+i));
    }
}

let ans = (Array.from(new Set(strings))).length;
console.log(ans);
