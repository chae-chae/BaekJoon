const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a,b,c,d,e,f] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let ansX = 0;
let ansY = 0;
for(let x = -999; x<=999; x++){
    for(let y = -999; y<=999; y++){
        if(a*x + b*y === c){
            if(d*x+ e*y === f){
                ansX = x;
                ansY = y;
                break;
            }
        }
    }
}

console.log(ansX, ansY);
