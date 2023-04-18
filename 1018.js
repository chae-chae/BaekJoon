const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);

const BW = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB"
];
    
const WB = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW"
];

let board = [];
for(let i = 1; i<input.length; i++){
    board.push(input[i]);
}

function BWcnt(x, y){
    let cnt = 0;
    for(let i = 0; i<8; i++){
        for(let j = 0; j<8; j++){
            if(board[x+i][y+j] !== BW[i][j]){
                cnt++;
            }
        }
    }
    return cnt;
}
function WBcnt(x, y){
    let cnt = 0;
    for(let i = 0; i<8; i++){
        for(let j = 0; j<8; j++){
            if(board[x+i][y+j] !== WB[i][j]){
                cnt++;
            }
        }
    }
    return cnt;
}

let ans = [];

for(let i = 0; i+8<=n; i++){
    for(let j = 0; j+8<=m; j++){
        ans.push(BWcnt(i,j));
        ans.push(WBcnt(i,j));
    }
}

console.log(Math.min(...ans));
