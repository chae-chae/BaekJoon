const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const ans = [];

for(let i = 0; i<input.length-1; i++){
    const [a, b] = input[i].split(" ").map(Number);
    if(a > b){
        ans.push("Yes");
    } else {
        ans.push("No");
    }
}

console.log(ans.join("\n"));
