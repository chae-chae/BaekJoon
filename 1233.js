const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [s1, s2, s3] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let arr = new Array(s1*s2*s3).fill(0);

for(let i = 1; i<=s1; i++){
    for(let j = 1; j<=s2; j++){
        for(let k = 1; k<=s3; k++){
            let sum = i+j+k;
            arr[sum]++;
        }
    }
}

let max = Math.max(...arr);
let ans = arr.indexOf(max);
console.log(ans);
