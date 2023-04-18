const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

for(let i = 0; i<n; i++){
    for(let j = i+1; j<n; j++){
        let temp;
        if(arr[i] < arr[j]){
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}

let ans = 0;
for(let i = 0; i<k; i++){
    ans = arr[i];
}
console.log(ans);
