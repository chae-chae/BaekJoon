const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.splice(0,1);

if(n === 1){
    console.log(input[0]);
    return;
}

let ans = [];

while(ans.length !== 1){
    for(let i = 0; i<input.length-1; i++){
        const same = [];
        const string = input[i];
        const string2 = input[i+1];
        for(let j = 0; j<string.length; j++){
            if(string[j] === string2[j]){
                same.push(string[j]);
            } else {
                same.push("?");
            }
        }
        ans.push(same.join(""));
    }
    if(ans.length === 1) break;
    if(ans.length > 1){
        input = ans;
        ans = [];
    }
}

console.log(...ans);
