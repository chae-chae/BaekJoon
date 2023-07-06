const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const times = input[1].split(" ").map(Number);

let ysum = 0;
let msum = 0;

for(let i = 0; i<times.length; i++){
    ysum += (parseInt(times[i]/30) + 1) * 10;
    msum += (parseInt(times[i]/60) + 1) * 15;
}

if(ysum === msum){
    console.log("Y M", ysum);
} else if(ysum < msum){
    console.log("Y", ysum);
} else {
    console.log("M", msum);
}
