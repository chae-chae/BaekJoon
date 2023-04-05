const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const a = input[0];
const b = input[1];
const v = input[2];

let day = 0;
let beforeOneDay = v-a;
let up = a-b;
day = Math.trunc(beforeOneDay / up); 
if(beforeOneDay % up === 0){ 
    day++;
} else { 
    day += 2;
}

console.log(day);
