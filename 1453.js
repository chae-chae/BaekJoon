const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const nums = input[1].split(" ").map(Number);

const arr = Array(100).fill(false);
let cnt = 0;
nums.forEach((v) => {
    if(arr[v-1]){
        cnt++;
    } else {
        arr[v-1] = true;
    }
});

console.log(cnt);
