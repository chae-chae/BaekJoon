const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let string = "";

const cantor = (n) =>{
    if(n === 0){
        string += "-";
        return;
    }
    
    cantor(n-1);
    
    for(let i = 0; i<Math.pow(3, n-1); i++){
        string += " ";
    }
    
    cantor(n-1);
}

for(let i = 0; i<input.length; i++){
    const n = input[i];
    string = "";
    cantor(n);
    console.log(string);
}
