const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [day, ...cars] = fs.readFileSync(filePath).toString().trim().split("\n");

day = parseInt(day) % 10;

let cnt = 0;

cars = cars[0].split(" ").map(Number);

cars.forEach((v) => {
    if(parseInt(v) === day) cnt++;
});

console.log(cnt);
