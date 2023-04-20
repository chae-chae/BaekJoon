const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.splice(0,1);

input.sort((a, b) => {
    if(a.length > b.length) {return 1}
    else if(a.length < b.length) {return -1}
    else {
        if(a > b) {return 1}
        else if(a < b) {return -1}
        else {return 0}
    }
});

let ans = Array.from(new Set(input));
ans.map((i) => console.log(i));
