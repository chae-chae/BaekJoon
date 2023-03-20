const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.map(i => i.split(" ").map(Number).reduce((a, b) => {
    if(a === 0 && b === 0){
        return;
    }
    console.log(a+b);
}))
