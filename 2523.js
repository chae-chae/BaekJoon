const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let ans = [];

for(let i = 1; i<=n; i++){
    let star = "*".repeat(i);
    ans.push(star);
    ans.push("\n");
}

for(let i = n-1; i>0; i--){
    let star = "*".repeat(i);
    ans.push(star);
    ans.push("\n");
}

console.log(ans.join(""));
