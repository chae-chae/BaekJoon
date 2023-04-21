const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
input.splice(0,1);

let arr = [];
for(let i = 0; i<n; i++){
    let p = input[i].split(" ");
    p[0] = parseInt(p[0]);
    arr.push(p);
}

arr.sort((a, b) =>{
    if(a[0] < b[0]) return -1;
    else if(a[0] > b[0]) return 1;
    else return 0;
})

let ans = "";
arr.map((i) => ans += `${i[0]} ${i[1]}\n`);
console.log(ans.trim());
