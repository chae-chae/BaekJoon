const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = parseInt(fs.readFileSync(filePath).toString().trim());

let ans = "";
for(let i = 1; i<=input; i++){
    for(let j = input-i; j>0; j--){
        ans += " ";
    }
    ans += "*".repeat(2*i -1);
    ans += "\n";
}
for(let i = input-1; i>=1; i--){
    for(let j = input-i; j>0; j--){
        ans += " ";
    }
    ans += "*".repeat(2*i -1);
    ans += "\n";
}

console.log(ans);
