const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(input[0]);
let cnt = 0;

for(let i = 1; i<=t; i++){
    let ans = "";
    cnt = 0;
    const str = input[i];
    ans = `${isPalindrome(str)} ${cnt}`;
    console.log(ans);
}

function recursion(str, l, r){
    cnt++;
    if(l >= r) return 1;
    else if(str[l] != str[r]) return 0;
    else return recursion(str, l+1, r-1);
}

function isPalindrome(str){
    return recursion(str, 0, str.length-1);
}
