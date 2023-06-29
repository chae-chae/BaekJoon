const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, m, M, T, R] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let currentM = m;
let ans = 0;

if(currentM+T > M){
    console.log(-1);
    return;
}

while(0 < N){
    if(currentM+T <= M){ // 운동
        N--;
        currentM += T;
    } else { // 휴식
        if(currentM-R < m){
            currentM = m;
        } else {
            currentM = currentM - R;
        }
    }
    ans++;
}

console.log(ans);
