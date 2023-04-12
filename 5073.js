const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for(let q = 0; q<input.length-1; q++){
    let arr = input[q].split(" ").map(Number);
    let sameSide;
    let ans = "";
    
    if(arr[0] === arr[1] && arr[1] === arr[2]){
        console.log("Equilateral");
        continue;
    } else {
        for(let i = 0; i<3; i++){
            for(let j = i+1; j<3; j++){
                if(arr[i] === arr[j]){
                    sameSide = arr[j];
                    break;
                }
            }
        }
        if(sameSide === undefined){
            let longestSide = Math.max(...arr);
            arr.splice(arr.indexOf(longestSide), 1);
            if(longestSide < arr[0] +arr[1]){
                console.log("Scalene");
                continue;
            } else {
                console.log("Invalid");
                continue;
            }
        } else {
            let newArr = [...new Set(arr)];
            newArr.splice(newArr.indexOf(sameSide), 1);
            let bottomSide = newArr[0];
            if(bottomSide < sameSide*2){
                console.log("Isosceles");
                continue;
            } else {
                console.log("Invalid");
                continue;
            }
        }
    }
}
