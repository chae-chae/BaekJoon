const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nm, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const n = nm.split(" ").map(Number)[0];
const m = nm.split(" ").map(Number)[1];

let row = m;
let col = n;

for(let i = 0; i<n; i++){
    for(let j = 0; j<m; j++){
        if(arr[i][j] === "X"){
            col--;
            break;
        }
    }
}

for(let i = 0; i<m; i++){
    for(let j = 0; j<n; j++){
        if(arr[j][i] === "X"){
            row--;
            break;
        }
    }
}

console.log(row > col? row : col);
