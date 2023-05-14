const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.length - 1;
const left = ["(", "["];
const right = [")", "]"];
const ans = [];

for(let i = 0; i<n; i++){
    const string = input[i];
    const stack = [];
    let isMatch = true;
    for(let j = 0; j<string.length; j++){
        if(left.includes(string[j])){ // if left
            stack.push(string[j]); // push string[j]
        } else if(right.includes(string[j])){ // if right
            if(stack.pop() !== left[right.indexOf(string[j])]){ // check whether string[j] () [], and not match 
                ans.push("no");
                isMatch = false;
                break;
            }
        }
    }
    if(isMatch){
        if(stack.length > 0) ans.push("no"); // if (left has left, stack length will be 1 
        else ans.push("yes"); // if length was 0, it means every parenthesis were matched
    }
}

console.log(ans.join("\n"));
