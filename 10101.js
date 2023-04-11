const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let sameAngle;
let ans = "";


for(let i = 0; i<3; i++){
    for(let j = i+1; j<3; j++){
        if(input[i] === input[j]){
            sameAngle = input[j];
            break;
        }
    }
}

if(input[0] === 60 && input[1] === 60 && input[2] === 60){
    ans = "Equilateral";
} else if(input.reduce((acc,cur)=> acc+cur) === 180){
    if(sameAngle === undefined){
        ans = "Scalene";
    } else {
        ans = "Isosceles"
    }
} else {
    ans = "Error";
}

console.log(ans);
