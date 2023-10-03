const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.splice(0, 1);

let ans = 0;

for(let i = 0; i<n; i++){
    let [stu, app] = input[i].split(" ").map(Number);
    let cnt = Math.floor(app/stu);
    let sum = app - stu*cnt;
    ans += sum;
}

console.log(ans);
