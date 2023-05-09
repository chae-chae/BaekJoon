const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const tc = parseInt(input[0]);

let ids = new Set();

for(let t = 1; t<=tc; t++){
    const [a, b] = input[t].split(" ");
    if(a === "ChongChong"){
        ids.add(b);
    } else if(b === "ChongChong"){
        ids.add(a);
    } else if(ids.has(a)){
        ids.add(b);
    } else if(ids.has(b)){
        ids.add(a);
    }
}

console.log(ids.size+1);
