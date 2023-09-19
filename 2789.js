const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

const cam = "CAMBRIDGE";

for(let i = 0; i<input.length; i++){
    for(let j = 0; j<cam.length; j++){
        if(input[i] === cam[j]){
            input[i] = "";
        }
    }
}

console.log(input.join(""));
