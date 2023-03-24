const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let arr = [];
for(let i = 0; i<26; i++){
    arr.push(-1);
}

for(let i = 0; i<input.length; i++){
    let arrIndex = input.charCodeAt(i) - 97;
    if(arr[arrIndex] == -1){
        arr[arrIndex]  = i;
    }
}

let ans = "";
arr.map((i) => ans += `${i} `);

console.log(ans.trim());
