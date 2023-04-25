const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.splice(0, 1);
let emp = {};

for(let i = 0; i<n; i++){
    let string = input[i].split(" ");
    emp[string[0]] = string[1];
}

let ans = "";
let arr = [];
for(const name in emp){
    if(emp[name] === "enter") arr.push(name);
}

arr.sort().reverse();

console.log(arr.join("\n"));
