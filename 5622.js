const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let arr = input.map((i) => i.charCodeAt(0) - 65);
let ans = 0;

arr.map((i) => {
    if(i <= 2){ //abc
        ans += 3;
    } else if(i<=5){ //def
        ans += 4;
    } else if(i<=8){
        ans += 5;
    } else if(i<=11){
        ans += 6;
    } else if(i<=14){
        ans += 7;
    } else if(i<=18){
        ans += 8;
    } else if(i<=21){
        ans += 9;
    } else {
        ans += 10;
    }
})

console.log(ans);
