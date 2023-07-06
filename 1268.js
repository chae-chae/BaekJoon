const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.splice(0, 1);

let student = input.map((str) => str.split(" ").map(Number));

let max_d = -1;
let ans;

let GRADE = 5;

for(let i = 0; i<n; i++){ // 학생마다 돈다
    let visited = Array(1001).fill(0); // 학생 최대 수만큼 배열
    let cnt = 0;
    for(let j = 0; j<GRADE; j++){ 
        let pClass = student[i][j]; // 현재 학생의 반. j는 학년
        for(let k = 0; k<n; k++){ // 다른 학생과 비교
            // i와 k가 달라야하는 이유: 자기자신과 비교x 
            // 현재학생의 j학년때 반과 다른 학생(k번 학생)의 j학년때 반 비교해서 같으면
            if(i !== k && pClass === student[k][j]){
                if(!visited[k]){ // 이 학생은 방문했다고 표시하면서 반이 같은 수를 카운트업
                    visited[k] = true;
                    cnt++;
                }
            }
        }
    }
    if(max_d < cnt){ // 제일 같은 반이 많은 수를 맥스로 바꿔주고 해당 i번학생을 답으로 기록해두기
        max_d = cnt;
        ans = i+1;
    }
}

console.log(ans);
