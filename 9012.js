const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.splice(0, 1);

for(let i = 0; i<n; i++){
    const string = input[i];
    const stack = [];
    let res = "YES";
    for(let j = 0; j<string.length; j++){
        if(string[j] === "("){
            stack.push(true);
        } else {
            if(!stack.pop()){ // if stack was empty so undefined poped
                res = "NO";
                break;
            }
        }
    }
    if(stack.length !== 0){
        res = "NO";
    }
    console.log(res);
}
