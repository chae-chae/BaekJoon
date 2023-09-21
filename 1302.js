const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const map = new Map();

for(let i = 1; i<input.length; i++){
    if(map.has(input[i])){
        map.set(input[i], map.get(input[i])+1);
    } else {
        map.set(input[i], 1);
    }
}

const mapToArr = [...map];
mapToArr.sort((a, b) => {
    if(a[1] < b[1]) return 1;
    else if(a[1] > b[1]) return -1;
    else {
        if(a[0] > b[0]) return 1;
        else return -1;
    }
});

console.log(mapToArr[0][0]);
