const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let longest = Math.max(...input);
input.splice(input.indexOf(longest), 1);

let ans = 0;

if(longest < input[0] + input[1]){
    ans = longest + input[0] + input[1];
} else {
    let sum = Math.floor(input[0] + input[1] - 0.1);
    ans = input[0] + input[1] + sum;
}

console.log(ans);
