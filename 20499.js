const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [k, d, a] = fs.readFileSync(filePath).toString().trim().split("/").map(Number);

if(k+a < d){
    console.log("hasu");
} else if(d === 0){
    console.log("hasu");
} else {
    console.log("gosu");
}
