const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const n = input[0];
input.splice(0, 1).sort((a, b) => a-b);

let reach = [];

for(let i = 0; i+1<n; i++){
    let dist = input[i+1] - input[i];
    reach.push(dist);
}

function gcd(a, b){
    while(b > 0){
        let temp = a;
        a = b;
        b = temp % b;
    }
    return a;
}

let distance = reach[0];
for(let i = 1; i<n-1; i++){
    distance = gcd(distance, reach[i]);
}

let ans = 0;
for(let i = 0; i<n-1; i++){
    ans += (reach[i] / distance) - 1;
}

console.log(ans);
