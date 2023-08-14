const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input1, input2] = fs.readFileSync(filePath).toString().trim().split("\n");

let [l, p] = input1.split(" ").map(Number);
const parti = input2.split(" ").map(Number);

const cnt = l*p;

const ans = [];
parti.forEach((v) => {
    ans.push(v-cnt);
});

console.log(ans.join(" "));
