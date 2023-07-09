const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [x, y] = fs.readFileSync(filePath).toString().trim().split(" ");

function rev(num){
    return parseInt(num.split("").reverse().join(""));
}

const revx = rev(x);
const revy = rev(y);

let ans = rev((revx + revy).toString());

console.log(ans);
