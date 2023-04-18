const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const n = parseInt(input);

let ans = [];

for(let i = 0; i<=n; i++){
    for(let j = 0; j<=n; j++){
        if((3*i + 5*j) === n){
            ans.push(i+j);
        }
    }
}

if(ans.length === 0){
    console.log(-1);
} else {
    console.log(Math.min(...ans));
}
