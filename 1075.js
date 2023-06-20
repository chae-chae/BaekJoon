const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let ans = [0,0];

let n = input[0].split("").map(Number);
let f = parseInt(input[1]);

let front = n.slice(0, n.length - 2);
let back = n.slice(n.length - 2);

let joined;

for(let i = 0; i<=9; i++){
    for(let j = 0; j<=9; j++){
        ans[0] = i;
        ans[1] = j;
        joined = Number([...front, ...ans].join(""));
        if(joined % f === 0){
            break;
        }
    }
    if(joined % f === 0){
        break;
    }
}

console.log(ans.join(""));
