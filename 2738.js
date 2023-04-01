const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let arr = input.slice(1);
// console.log(arr);
let A = [];
arr.slice(0, N).map((i, index) => {
    A.push(i.split(" ").map(Number));
});
let B = [];
arr.slice(N).map((i, index) => {
    B.push(i.split(" ").map(Number));
});
// console.log(A, B);

let ans = "";
for(let i = 0; i<N; i++){
    for(let j = 0; j<M; j++){
        let sum = A[i][j] + B[i][j];
        ans += `${sum} `;
    }
    ans = ans.trim();
    ans += "\n";
}

console.log(ans.trim());
