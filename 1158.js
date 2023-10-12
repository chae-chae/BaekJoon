const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, k] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let arr = [];
for(let i = 1; i<=n; i++){
    arr.push(i);
}

let ans = [];
let cnt = 1;

while(arr.length > 0){
    const dq = arr.shift();
    if(cnt % k){
        arr.push(dq);
    } else {
        ans.push(dq);
    }
    cnt++;
}

console.log(`<${ans.join(", ")}>`);
