const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[1];
let a = 0;
let b = 0;

for(let i = 0; i<input.length; i++){
    if(input[i] === "A") a++;
    else b++;
}

if(a > b){
    console.log("A");
} else if (a < b){
    console.log("B");
} else {
    console.log("Tie");
}
