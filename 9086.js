const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = parseInt(input[0]);

for(let i = 1; i<=T; i++){
    let arr = input[i].split("");
    let ans = "";
    ans += arr[0];
    ans += arr[arr.length - 1];
    console.log(ans);
}
