const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const d = input.slice(1, n+1);
const b = input.slice(n+1);

let obj = {};

d.forEach((i) => {
    obj[i] = "";
})
b.forEach((i) => {
    if(obj[i] === ""){
        obj[i] = i;
    }
})

let cnt = 0;
let ans = "";
(Object.values(obj)).sort().map((i) => {
    if(i !== ""){
        cnt++;
        ans += `${i}\n`
    }
});

console.log(cnt);
console.log(ans.trim());
