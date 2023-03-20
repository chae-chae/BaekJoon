const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = parseInt(fs.readFileSync(filePath).toString().trim());

let ans = "";
let i = input/4;
while(i>0){
    ans += "long ";
    i--;
}
ans += "int";
console.log(ans);
