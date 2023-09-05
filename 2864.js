const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let ans = [];

let a = parseInt(input[0]);
let aa = input[0].split("");
let fivea = [];
let sixa = [];

for(let i = 0; i<aa.length; i++){
    if(aa[i] === "5"){
        sixa.push("6");
    } else {
        sixa.push(aa[i]);
    }
}
for(let i = 0; i<aa.length; i++){
    if(aa[i] === "6"){
        fivea.push("5");
    } else {
        fivea.push(aa[i]);
    }
}
fivea = parseInt(fivea.join(""));
sixa = parseInt(sixa.join(""));

let b = input[1];
let bb = input[1].split("");
let fiveb = [];
let sixb = [];

for(let i = 0; i<bb.length; i++){
    if(bb[i] === "5"){
        sixb.push("6");
    } else {
        sixb.push(bb[i]);
    }
}
for(let i = 0; i<bb.length; i++){
    if(bb[i] === "6"){
        fiveb.push("5");
    } else {
        fiveb.push(bb[i]);
    }
}
fiveb = parseInt(fiveb.join(""));
sixb = parseInt(sixb.join(""));

let min = Math.min(a, fivea, sixa) + Math.min(b, fiveb, sixb);
let max = Math.max(a, fivea, sixa) + Math.max(b, fiveb, sixb);

console.log(min, max);
