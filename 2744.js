const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const string = input.split("");
const ans = [];

string.forEach((v) => {
    if(v.toUpperCase() === v){
        ans.push(v.toLowerCase());
    } else {
        ans.push(v.toUpperCase());
    }
})

console.log(ans.join(""));
