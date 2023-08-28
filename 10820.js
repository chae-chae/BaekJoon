const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arr = [];

for(let i = 0; i<input.length-1; i++){
    const string = input[i];
    let lc = 0;
    let uc = 0;
    let num = 0;
    let space = 0;
    for(let j = 0; j<string.length; j++){
        if(97<=string.charCodeAt(j) && string.charCodeAt(j)<=122){
            lc++;
        } else if(65<=string.charCodeAt(j) && string.charCodeAt(j)<=90){
            uc++;
        } else if(48<=string.charCodeAt(j) && string.charCodeAt(j)<=57){
            num++;
        } else if(string.charCodeAt(j) === 32){
            space++;
        } else {
            console.log("error");
            return;
        }
    }
    let ans = `${lc} ${uc} ${num} ${space}`;
    arr.push(ans);
}

console.log(arr.join("\n"));
