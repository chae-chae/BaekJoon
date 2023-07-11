const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = Array(26).fill(0);

input.forEach((str) => {
    for(let i = 0; i<str.length; i++){
        let index = str[i].charCodeAt(0) - 97;
        if(index === -65) continue;
        arr[index]++;
    }
});

let max = Math.max(...arr);
let idx = arr.indexOf(max);
let indices = [];
while(idx != -1){
    indices.push(idx);
    idx = arr.indexOf(max, idx + 1);
}

let ansArr = [];

indices.forEach((v) => {
    let ans = String.fromCharCode(v + 97);
    ansArr.push(ans);
})

console.log(ansArr.join(""));
