const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.splice(0,1);
let people = [];

for(let i = 0; i<n; i++){
    let str = input[i].split(" ").map(Number);
    people.push(str);
}

let ans = [];

for(let i = 0; i<n; i++){
    let cnt = 1;
    for(let j = 0; j<n; j++){
        if(i === j) continue;
        if(people[i][0] < people[j][0] && people[i][1] < people[j][1]){
            cnt++;
        }
    }
    ans.push(cnt);
}

console.log(ans.join(" "));
