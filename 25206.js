const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let ans = 0;
let totalCredit = 0;
let totalGrade = 0;

for(let q = 0; q<20; q++){
    const string = input[q].split(" ");
    let credit = parseInt(string[1]);
    let grade = string[2];
    let score = 0;
    if(grade === "A+"){
        score = 4.5;
    } else if(grade === "A0"){
        score = 4.0;
    } else if(grade === "B+"){
        score = 3.5;
    } else if(grade === "B0"){
        score = 3.0;
    } else if(grade === "C+"){
        score = 2.5;
    } else if(grade === "C0"){
        score = 2.0;
    } else if(grade === "D+"){
        score = 1.5;
    } else if(grade === "D0"){
        score = 1.0;
    } else if(grade === "F"){
        score = 0.0;
    } else { // P
        continue;
    }
    totalGrade += credit*score;
    totalCredit += credit;
}

ans = totalGrade / totalCredit;

console.log(ans);
