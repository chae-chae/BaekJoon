const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
input.splice(0, 1);

let obj = {};

for(let i = 0; i<n; i++){
    if(input[i].length >= m){
        obj[input[i]] = 0;
    }
}

for(let i = 0; i<n; i++){
    if(obj[input[i]] >= 0) obj[input[i]]++;
}

let sortable = [];
for(let word in obj){
    sortable.push([word, obj[word]]);
}

sortable.sort((a, b) => {
    if(a[1] > b[1]) return -1;
    if(a[1] < b[1]) return 1;
    
    if(a[0].length > b[0].length) return -1;
    if(a[0].length < b[0].length) return 1;
    
    if(a[0] > b[0]) return 1;
    if(a[0] < b[0]) return -1;
})


let ans = "";

for(let i = 0; i<sortable.length; i++){
    ans += `${sortable[i][0]}\n`;
}

console.log(ans.trim());
