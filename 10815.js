const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const m = parseInt(input[2]);

let sang = input[1].split(" ").map(Number);
let arr = input[3].split(" ").map(Number);

let sample = [...arr].sort((a, b) => a-b);
let sampleObj = {};
sample.forEach((i, idx) => sampleObj[i] = 0);

for(let i = 0; i<n; i++){
    let left = 0;
    let right = m-1;
    let mid;
    let target = sang[i];
    while(left <= right){
        mid = Math.floor((left + right)/2);
        if(sample[mid] === target){
            sampleObj[target]++;
        }
        if(sample[mid] > target){   
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
}

let ans = "";
for(let i = 0; i<m; i++){
    ans += `${sampleObj[arr[i]]} `;
}

console.log(ans.trim());
