const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const tc = input[0];
input.splice(0, 1);

let res = [];
let size = Math.max(...input);
let arr = [];
for(let i = 0; i<size; i++){
    arr.push(true);
}
arr[0] = false;
arr[1] = false;
for(let i = 2; i<=size/2; i++){
    if(arr[i]){
        for(let j = 2; j<=size/i; j++){
            arr[i*j] = false;
        }
    }
}

for(let i = 0; i<tc; i++){
    let sp = input[i];
    let cnt = 0;
    for(let j = 1; j<=sp/2; j++){
        if(arr[sp-j] && arr[j]){
            cnt++;
        }
    }
    res.push(cnt);
}

console.log(res.join("\n").trim());
