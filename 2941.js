const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let cnt = 0;

for(let i = 0; i<input.length; i++){
    if(input[i] === "c"){
        if(input[i+1] === "=" || input[i+1] === "-"){
            i += 1;
            cnt++;
        } else {
            cnt++;
        }
    } else if(input[i] === "d"){
        if(input[i+1] === "-"){
            i += 1;
            cnt++;
        } else if(input[i+1] === "z" && input[i+2] === "="){
            i += 2;
            cnt++;
        } else {
            cnt++;
        }
    } else if(input[i] === "l" && input[i+1] === "j"){
        i += 1;
        cnt++;
    } else if(input[i] === "n" && input[i+1] === "j"){
        i += 1;
        cnt++;
    } else if(input[i] === "s" && input[i+1] === "="){
        i += 1;
        cnt++;
    } else if(input[i] === "z" && input[i+1] === "="){
        i += 1;
        cnt++;
    } else {
        cnt++;
    }
}

console.log(cnt);
