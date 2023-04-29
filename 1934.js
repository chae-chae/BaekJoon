const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = parseInt(input[0]);
let ans = [];

for(let i = 1; i<= T; i++){
    let [a, b] = input[i].split(" ").map(Number);
    ans.push(lcm(a, b));
}

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

console.log(ans.join("\n").trim());
