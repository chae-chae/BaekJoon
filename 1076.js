const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [first, second, third] = fs.readFileSync(filePath).toString().trim().split("\n");

const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

let f = colors.indexOf(first);
let s = colors.indexOf(second);
let t = Math.pow(10, colors.indexOf(third));

let ans = parseInt(`${f}${s}`) * t;

console.log(ans);
