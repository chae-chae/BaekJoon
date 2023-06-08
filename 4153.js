const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const ans = [];

for(let i = 0; i<input.length-1; i++){
    let arr = input[i].split(" ").map(Number).sort((a, b) => a-b);
    const a = arr[0];
    const b = arr[1];
    const c = arr[2];
    if(c*c === a*a + b*b){
        ans.push("right");
    } else {
        ans.push("wrong");
    }
}

console.log(ans.join("\n"));
