const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

//10진수로 갈 때는 parseInt, 다른 진법으로 갈 때는 toString을 사용
console.log(parseInt(input, 16));
