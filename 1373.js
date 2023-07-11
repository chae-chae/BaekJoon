const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let ans = [];

while(input.length){
    let tmp = 0;
    for(let i = 0; i<3; i++){
        let char = parseInt(input.pop());
        if(!char) continue;
        tmp += 1<<i;
    }
    ans.push(tmp);
}

console.log(ans.reverse().join(""));
