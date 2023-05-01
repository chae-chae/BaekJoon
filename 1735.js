const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let [c, d] = input[1].split(" ").map(Number);

let mo = b*d;
let so = a*d + b*c;

let div = gcd(so, mo);

function gcd(a, b){
    while(b > 0){
        let temp = a;
        a = b;
        b = temp % b;
    }
    return a;
}

console.log(`${so/div} ${mo/div}`);
