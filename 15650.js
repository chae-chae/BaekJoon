const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const seq = [...Array(m)].fill(0);
const visited = [...Array(n)].fill(false);
let res = "";
let sorted = [];

function dfs(k){
    if(k === m){
        const arr = [];
        for(let i = 0; i<m; i++){
            arr.push(seq[i]);
        }
        sorted.push(arr.sort((a, b) => a-b));
        return res += `${arr.join(" ")}\n`;
    }
    for(let i = 1; i<=n; i++){
        if(!visited[i]){
            seq[k] = i;
            visited[i] = true;
            dfs(k+1);
            visited[i] = false;
        }
    }
}

dfs(0);
const sets = new Set(sorted.map((i) => i.join(" ")));
let ans = "";
for (let item of sets) ans += `${item}\n`;
console.log(ans);
