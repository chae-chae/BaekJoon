const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.splice(0,1);

const arr = new Array(26).fill(0);

for(let i = 0; i<n; i++){
    const ascii = input[i][0].charCodeAt(0) - 97;
    arr[ascii]++;
}

let ans = "";

arr.forEach((v, index) => {
    if(v >= 5){
        ans += `${String.fromCharCode(97+index)}`;
    }
})

ans === "" ? console.log("PREDAJA") : console.log(ans);
