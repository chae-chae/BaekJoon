const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);

let ans = 0;

for(let i = 1; i<=N; i++){
    const string = input[i];
    let notGroup = 0;
    let alpha = [];
    let check = [];
    for(let q = 0; q<26; q++){
        alpha.push(0);
        check.push(0);
    }
    for(let j = 0; j<string.length; j++){
        alpha[(string[j].charCodeAt(0)-97)]++; // 'a' -> alpha[0]++, 'b' -> alpha[1]++...
        if(j>0){ // groupchecker
            if(string[j] === string[j-1]){
                check[(string[j].charCodeAt(0)-97)]++; // if is repeated, check[a,b,c...]++
            }
        }
    }
    for(let k = 0; k<26; k++){ // alpha, check len:26
        if(alpha[k] - check[k] > 1){ // if group, alpha-check = 1 else >1
            notGroup++;
        }
    }
    if(notGroup === 0) ans++;
}

console.log(ans);
