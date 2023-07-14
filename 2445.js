const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const n = parseInt(input);

const ans = [];

for(let i = 1; i<=n; i++){
    let str = "";
    let star = "*".repeat(i);
    let space = " ".repeat(2*n - 2*i);
    str += star;
    str += space;
    str += star;
    ans.push(str);
}

for(let i = n-2; i>=0; i--){
    ans.push(ans[i]);
}

console.log(ans.join("\n"));
