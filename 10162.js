const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

if(input[input.length-1] !== "0"){
    console.log(-1);
    return;
}

let t = parseInt(input);

const a = 5*60;
const b = 60;
const c = 10;

let cnta = parseInt(t/a);
t = t-cnta*a;
let cntb = parseInt(t/b);
t = t-cntb*b;
let cntc = parseInt(t/c);

console.log(cnta, cntb, cntc);
