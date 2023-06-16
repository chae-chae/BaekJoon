const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const sets = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

let ans = [];

for(let i = 0; i<input.length - 1; i++){
    let cnt = 0;
    const string = input[i].split("");
    string.forEach((v) => {
        if(sets.has(v)) cnt++;
    })
    ans.push(cnt);
}

console.log(ans.join("\n"));
