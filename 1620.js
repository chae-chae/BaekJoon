const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
input.splice(0, 1);
let pokelist = input.slice(0, n);
let question = input.slice(n);

let poke = {};
let ans = "";

pokelist.forEach((i, idx) => {
    poke[i] = idx+1;
    poke[idx+1] = i;
});

question.forEach((i) => {
    ans += `${poke[i]}\n`;
})

console.log(ans);
