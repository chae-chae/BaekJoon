const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [total, ...books] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

books.forEach((v) => {
    total = total - v;
});

console.log(total);
