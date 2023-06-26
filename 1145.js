const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let ans = Math.min(...input);

while(1){
    let cnt = 0;
    for(let i = 0; i<input.length; i++){
        if(ans % input[i] === 0){
            cnt++;
        }
    }
    if(cnt >= 3) break;
    ans++;
}

console.log(ans);
