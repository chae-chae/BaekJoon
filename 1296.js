const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const y = input[0].split("");
const n = parseInt(input[1]);
input.splice(0, 2);

function logic(L, O, V, E){
    return ((L+O) * (L+V) * (L+E) * (O+V) * (O+E) * (V+E)) % 100;
}

let ansObj = new Object();

for(let i = 0; i<n; i++){
    let score = 0;
    let L = 0;
    let O = 0;
    let V = 0;
    let E = 0;
    for(let j = 0; j<y.length; j++){
        if(y[j] === "L"){
            L++;
        }else if(y[j] === "O"){
            O++;
        }else if(y[j] === "V"){
            V++;
        }else if(y[j] === "E"){
            E++;
        }
    }
    const team = input[i].split("");
    for(let j = 0; j<team.length; j++){
        if(team[j] === "L"){
            L++;
        }else if(team[j] === "O"){
            O++;
        }else if(team[j] === "V"){
            V++;
        }else if(team[j] === "E"){
            E++;
        }
    }
    score = logic(L, O, V, E);
    ansObj[team.join("")] = score;
}

let sortedArr = [];
for(let name in ansObj){
    sortedArr.push([name, ansObj[name]]);
}
sortedArr.sort();
sortedArr.sort((a, b) => {
    return b[1] - a[1];
})

console.log(sortedArr[0][0]);
