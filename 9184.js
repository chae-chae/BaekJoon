const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const ans = [];

let memo = [];
for(let i = 0; i<21; i++){
    memo[i] = [];
    for(let j = 0; j<21; j++){
        memo[i][j] = [];
        for(let k = 0; k<21; k++){
            memo[i][j][k] = 0;
        }
    }
}

function w(a, b, c){
    if(a<=0 || b<=0 || c<=0) return 1;
    if(a>20 || b>20 || c>20) return memo[20][20][20] = w(20, 20, 20);
    if(memo[a][b][c]) return memo[a][b][c];
    if(a<b && b<c) return memo[a][b][c] = w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c);
    return memo[a][b][c] = w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1);
}

for(let i = 0; i<input.length - 1; i++){
    const [a, b, c] = input[i].split(" ").map(Number);
    ans.push(`w(${a}, ${b}, ${c}) = ${w(a,b,c)}`);
}

console.log(ans.join("\n"));
