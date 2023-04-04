const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const B = input[0];
const N = parseInt(input[1]);

const nums = B.split("").reverse();

let sum = 0;

nums.map((item, index) => {
    let num = Math.pow(N, index);
    "A" <= item && item <= "Z" ?  sum += num*(item.charCodeAt(0)-65+10) : sum += num*(parseInt(item))
})

console.log(sum)
