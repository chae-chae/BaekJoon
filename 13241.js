const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let ans = [];
let a = input[0];
let b = input[1];

console.log(lcm(a, b));


function lcm(a, b){
    return a*b/ gcd(a,b);
}

function gcd(a, b){
    while(b > 0){
        let temp = a;
        a = b;
        b = temp % b;
    }
    return a;
}
