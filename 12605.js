const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let ans = [];

for(let i = 1; i<input.length; i++){
    const sentence = input[i].split(" ").reverse();
    let string = `Case #${i}: ${sentence.join(" ")}`;
    console.log(string);
}
