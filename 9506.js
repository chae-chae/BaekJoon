const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

for(let i = 0; i<input.length-1; i++){
    let sum = 0;
    let arr = [];
    for(let j = 1; j<input[i]; j++){
        if(input[i] % j === 0){
            arr.push(j);
        }
    }
    sum = arr.reduce((acc, cur) => acc+cur);
    if(input[i] === sum){
        let ans = "";
        arr.map((i) => {
            ans += `${i} + `
        });
        ans = ans.slice(0, ans.length-3);
        console.log(`${input[i]} = ${ans}`);
    } else {
        console.log(`${input[i]} is NOT perfect.`);
    }
}
