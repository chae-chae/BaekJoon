const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const seq = [...Array(m)].fill(0);
const visited = [...Array(n)].fill(false);
let res = "";

function dfs(k){
    if(k === m){
        const arr = [];
        for(let i = 0; i<m; i++){
            arr.push(seq[i]);
        }
        return res += `${arr.join(" ")}\n`;
    }
    for(let i = 1; i<=n; i++){
        seq[k] = i;
        visited[i] = true;
        dfs(k+1);
        visited[i] = false;
    }
}

dfs(0);
console.log(res);
