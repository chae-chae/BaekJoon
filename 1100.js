const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let ans = 0;

for(let i = 0; i<input.length; i++){
    const string = input[i];
    let j;
    if(i%2){
        j = 1;
    } else {
        j = 0;
    }
    while(j<string.length){
        if(string[j] === "F"){
            ans++;
        }
        j += 2;
    }
}

console.log(ans);
