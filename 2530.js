const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [times, dd] = fs.readFileSync(filePath).toString().trim().split("\n");

let [h, m, s] = times.split(" ").map(Number);
const d = Number(dd);

let min = parseInt(d/60);
let sec = d%60;
let hh = 0;

if(s + sec >= 60){
    s = s + sec - 60;
    min += 1;
} else {
    s += sec;
}

if(m + min >= 60){
    hh = parseInt((m + min) / 60);
    m = (m + min) % 60;
} else {
    m += min;
}

if(h + hh >= 24){
    h = (h+hh)%24;
} else {
    h += hh;
}

console.log(h, m, s);
