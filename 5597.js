const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let arr = [];
let ans = [];
for(let i = 0; i<=30; i++){
    arr.push(i);
    ans.push(i);
}

arr.map((i, idx) => {
    input.map((j)=> {
        if(i === j){
            ans[i] = -1;
        }
    })
})

let ansStr = "";

ans.map((i) => {
    if(i !== -1 && i !== 0) ansStr += `${i} `; 
});

console.log(ansStr.trim());
