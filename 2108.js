const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const n = input[0];
input.splice(0, 1);

input.sort((a, b) => a-b);

let sum = 0;
let center  = 0;
let obj = {};

for(let i = 0; i<input.length; i++){
    sum += input[i];
    if(i === Math.ceil(input.length/2)-1){
        center = input[i];
    }
    obj[input[i]] = 0;
}

for(let i = 0; i<input.length; i++){
    obj[input[i]]++;
}

let sortable = [];
for(let number in obj){
    sortable.push([number, obj[number]]);
}

sortable.sort((a, b) => b[1] - a[1]);

let max = sortable[0][1];
let preq = [];
sortable.forEach((i) => {
    if(max === i[1]){
        preq.push(i[0]);
    }
});

let ans = 0;

preq.sort((a, b) => a-b);
if(preq.length > 1){
    ans = preq[1];
} else {
    ans = preq[0];
}

let range = input[input.length-1] - input[0];

let avg = Math.round(sum/input.length);
if(avg === -0) avg = 0;

let str = `${avg}\n${center}\n${ans}\n${range}`;

console.log(str);
