const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = parseInt(fs.readFileSync(filePath).toString().trim());

let stars = "";
for(let i = 1; i<=input; i++){
    for(let j = 1; j<=i; j++){
        stars += "*";
    }
    stars += "\n";
}
console.log(stars);
