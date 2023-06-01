const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let list = input.split("-");
let temp = [];

list.forEach((i) => {
    let sum = 0;
    let s = i.split("+");
    s.forEach((i) => {
        sum += parseInt(i);
    })
    temp.push(sum);
})

let res = temp[0];

for(let i = 1; i<temp.length; i++){
    res -= temp[i];
}

console.log(res);
