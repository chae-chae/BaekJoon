const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const nm = input[0].split(" ").map(Number);
const N = nm[0];
const M = nm[1];

let arr = [];
for(let i = 0; i<=N; i++){
    arr.push(i);
}
arr[0] = -1;

for(let q = 1; q<=M; q++){
    let temp = input[q].split(" ").map(Number);
    let i = temp[0];
    let j = temp[1];
    let tmp = 0;
    tmp = arr[j];
    arr[j] = arr[i];
    arr[i] = tmp;
}

let ans = "";
arr.map((i) => {
    i !== -1 ? ans += `${i} ` : null;
})
console.log(ans.trim());
