const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const n = input[0];
input.splice(0, 1);

const ans = [];
const stack = [];
let index = 0;

for(let i = 1; i<=n; i++){
    stack.push(i);
    ans.push("+");
    while(stack[stack.length - 1] === input[index]){
        stack.pop();
        ans.push("-");
        index++;
        if(index === n) break;
    }
}

if(stack.length === 0){
    console.log(ans.join("\n"));
} else {
    console.log("NO");
}
