const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let coord = [];

for(let i = 0; i<3; i++){
    coord.push(input[i].split(" ").map(Number));
}

let x = [];
let y = [];

for(let i = 0; i<3; i++){
    x.push(coord[i][0]);
    y.push(coord[i][1]);
}

let samex;
let samey;

for(let i = 0; i<3; i++){
    for(let j = i+1; j<3; j++){
        if(x[i] === x[j]){
            samex = x[j];
            break;
        }
    }
}
for(let i = 0; i<3; i++){
    for(let j = i+1; j<3; j++){
        if(y[i] === y[j]){
            samey = y[j];
            break;
        }
    }
}

let ans = "";
x.map((i) => i !== samex ? ans += `${i} `:null);
y.map((i) => i !== samey ? ans += `${i} `:null);

console.log(ans.trim());
