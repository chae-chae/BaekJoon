const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const tc = parseInt(input[0]);

let cnt = 0;
let ids = new Set();

for(let t = 1; t<=tc; t++){
    const string = input[t];
    if(string === "ENTER"){
        cnt += ids.size;
        ids.clear();
        continue;
    }
    ids.add(string);
}

console.log(cnt+ids.size);
