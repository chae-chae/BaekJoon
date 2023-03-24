const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = parseInt(input[0]);

for(let i = 1; i<=T; i++){
    let testcase = (input[i]).split(" ");
    let R = parseInt(testcase[0]);
    let S = testcase[1];
    let P = "";
    for(let j = 0; j<S.length; j++){
        P += S[j].repeat(R);
    }
    console.log(P);
}
