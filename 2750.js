const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

input.splice(0,1);

for(let i = 0; i<input.length; i++){
    for(let j = i+1; j<input.length; j++){
        let temp;
        if(input[i] > input[j]){
            temp = input[j];
            input[j] = input[i];
            input[i] = temp;
        }
    }
}

input.map((i) => console.log(i));
