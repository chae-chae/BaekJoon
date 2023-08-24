const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("");

const ans = [];

for(let i = 0; i<input.length; i++){
    let char = input[i];
    let charNum = char.charCodeAt(0);
    if(97 <= charNum && charNum <= 122){
        charNum += 13;
        if(charNum > 122){
            charNum -= 122;
            charNum += 96;
        }
        char = String.fromCharCode(charNum);
    } else if(65 <= charNum && charNum <= 90){
        charNum += 13;
        if(charNum > 90){
            charNum -= 90;
            charNum += 64;
        }
        char = String.fromCharCode(charNum);
    } else {
        ;
    }
    ans.push(char);
}

console.log(ans.join(""));
