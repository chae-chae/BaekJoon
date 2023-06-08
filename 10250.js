const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const tc = Number(input[0]);
input.splice(0,1);

const ans = [];

for(let i = 0; i<tc; i++){
    let [h,w,n] = input[i].split(" ").map(Number);
    let cycle = 0;
    while(h < n && n > 0){
        n = n-h;
        cycle++;
        if(n-h < 0){
            break;
        }
    }
    const hosu = cycle + 1 < 10? `0${cycle+1}`: cycle + 1;
    const floor = n;
    const string = `${floor}${hosu}`;
    ans.push(string);
}

console.log(ans.join("\n"));
