const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let A = [];
input.map((i, index) => {
    A.push(i.split(" ").map(Number));
});

let ans = "";
let max = -1;
let R = 0;
let C = 0;
for(let i = 0; i<9; i++){
    for(let j = 0; j<9; j++){
        if(max < A[i][j]){
            max = A[i][j];
            R = i;
            C = j;
        }
    }
}

ans += `${max}\n${R+1} ${C+1}`;
console.log(ans);
