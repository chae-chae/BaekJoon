const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let asc = false;
let des = false;
let mix = false;

for(let i = 0; i<8; i++){
    if(i === 7){
        if(input[i] === 8){
            break;
        }
    }
    if(input[i]+1 === input[i+1]){
        asc = true;
    } else {
        asc = false;
        break;
    }
}

if(asc){
    console.log("ascending");
    return;
}

for(let i = 0; i<8; i++){
    if(i === 7){
        if(input[i] === 1){
            break;
        }
    }
    if(input[i]-1 === input[i+1]){
        des = true;
    } else {
        des = false;
        break;
    }
}

if(des){
    console.log("descending");
    return;
}

console.log("mixed");
