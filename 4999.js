const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const j = input[0].length;
const d = input[1].length;

if(j>=d){
    console.log("go");
} else {
    console.log("no");
}
