const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const a = Array.from(new Set(input[1].split(" ").map(Number).sort()));
const b = Array.from(new Set(input[2].split(" ").map(Number).sort()));

let objA = {};
let objB = {};

a.forEach((i) => {
    objA[i] = 1;
})
b.forEach((i) => {
    objB[i] = 1;
})

let arr = [];

a.forEach((i) => {
    if(objB[i] !== 1){
        arr.push(i);
    }
})
b.forEach((i) => {
    if(objA[i] !== 1){
        arr.push(i);
    }
})

console.log(arr.length);
