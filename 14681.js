const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
// readFileSync(filePath)를 하면 런타임 오류가 남 문제오류인듯 그래서 0 넣어주라고 해서 0넣어줌

const x = input[0];
const y = input[1];


if(x>0 && y>0){
    console.log("1");
 }else if(x<0 && y>0){
    console.log("2");
} else if(x<0 && y<0){
    console.log("3");
} else {
    console.log("4");
}
