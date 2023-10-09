const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.splice(0, 1);

for(let i = 0; i<input.length; i++){
    let [r, e, c] = input[i].split(" ").map(Number);
    if(r > e-c){
        console.log("do not advertise");
    } else if (r < e-c){
        console.log("advertise");
    } else {
        console.log("does not matter");
    }
}
