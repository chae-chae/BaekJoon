const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

input.splice(0,1);

let ans = [];

for(let i = 0; i<input.length; i++){
    let string = input[i].toString(2).split("").reverse();
    for(let j = 0; j<string.length; j++){
        if(string[j].includes("1")){
            ans.push(j);
        }
    }
}

console.log(ans.join(" "));
