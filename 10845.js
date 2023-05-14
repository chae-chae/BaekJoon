const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.splice(0, 1);

let arr = [];
let ans = "";

for(let i = 0; i<n; i++){
    if(input[i].includes("push")){
        let num = input[i].split(" ").map(Number)[1];
        arr.push(num);
    } else if(input[i].includes("pop")){
        if(arr.length > 0){
            let num = arr[0];
            arr.splice(0, 1);
            ans += `${num}\n`;
        } else {
            ans += `${-1}\n`;
        }
    } else if(input[i].includes("size")){
        ans += `${arr.length}\n`;
    } else if(input[i].includes("empty")){
        if(arr.length > 0){
            ans += `${0}\n`;
        } else {
            ans += `${1}\n`;
        }
    } else if(input[i].includes("front")){
        if(arr.length > 0){
            let num = arr[0];
            ans += `${num}\n`;
        } else {
            ans += `${-1}\n`;
        }
    } else if(input[i].includes("back")){
        if(arr.length > 0){
            let num = arr[arr.length-1];
            ans += `${num}\n`;
        } else {
            ans += `${-1}\n`;
        }
    }
}

console.log(ans.trim());
