const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = parseInt(fs.readFileSync(filePath).toString().trim());

let stars = "";
for(let i = 1; i<=input; i++){
    stars += " ".repeat(input-i);
    stars += "*".repeat(i);
    console.log(stars);
    stars = "";
}
