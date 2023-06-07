const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

if(input[1] === undefined){
    console.log("0.0");
    return;
}

let ans = 0;

if(input[0] === "A"){
    ans = 4;
} else if (input[0] === "B"){
    ans = 3;
} else if (input[0] === "C"){
    ans = 2;
} else {
    ans = 1;
}

if(input[1] === "+"){
    ans += 0.3;
} else if (input[1] === "0"){
    ans = ans.toFixed(1);
} else {
    ans += -0.3;
}

console.log(ans);
