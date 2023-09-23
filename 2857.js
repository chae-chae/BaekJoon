const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const ans = [];

for(let i = 0; i<input.length; i++){
    if(input[i].includes("FBI")){
        ans.push(i+1);
    }
}

if(ans.length === 0){
    console.log("HE GOT AWAY!");
    return;
}

console.log(ans.join(" "));
