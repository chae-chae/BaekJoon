const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const a = input[0];
const b = input[1];
const c = input[2];
let ans = 0;

function sol(){
    if(a == b || a == c){
        if(b == c){ // a=b=c
            ans = 10000+a*1000;
            return;
        }
        ans = 1000+a*100;
    } else if(b == c){
        ans = 1000+b*100;
    } else {
        ans = Math.max(a, b, c)*100;
    }
}

sol();
console.log(ans);
