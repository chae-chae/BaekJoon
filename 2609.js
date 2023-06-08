const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let lcm = 0;
let gcd = 0;

if(a < b){
    let tmp = b;
    b = a;
    a = tmp;
}

for(let i = 1; i<=a*b + 1;i++){
    let suma = a*i;
    for(let j = 1; suma >= b*j; j++){
        let sumb = b*j;
        if(suma === sumb){
            lcm = suma;
            break;
        }
    }
    if(lcm) break;
}

let arrA = [];
let arrB = [];
for(let i = 1; i<=a; i++){
    if(a % i === 0){
        arrA.push(i);
    }
}
for(let i = 1; i<=b; i++){
    if(b % i === 0){
        arrB.push(i);
    }
}

const setA = new Set(arrA);
const common = [];
arrB.map((v) => {
    if(setA.has(v)) common.push(v);
});
gcd = Math.max(...common);

console.log(gcd);
console.log(lcm);
