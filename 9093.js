const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const ans = [];

for(let i = 1; i<input.length; i++){
    let str = input[i].split(" ");
    for(let j = 0; j<str.length; j++){
        let word = str[j].split("");
        ans.push(word.reverse().join(""));
        ans.push(" ");
    }
    ans.push("\n");
}

console.log(ans.join(""));
