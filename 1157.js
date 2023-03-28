const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let arr = [];
for(let i = 0; i<26; i++){
    arr.push(0);
}

input.map((i)=>{
    if('a'<=i && i<='z'){
        // console.log(`small ${i}`);
        arr[i.charCodeAt(0) - 97]++;
    } else {
        // console.log(`big ${i}`);
        arr[i.charCodeAt(0) - 65]++;
    }
})

// console.log(arr);
let max = Math.max(...arr);
// console.log(max);
let maxIdx = arr.indexOf(max);
// console.log("maxindex :", maxIdx)

let slicedArr = arr.slice(maxIdx+1);
// console.log(slicedArr);
let maxIdx2 = slicedArr.indexOf(max);
// console.log("maxindex2 :", maxIdx2);

if(maxIdx2 === -1){ //only one max value
    console.log(String.fromCharCode(65+maxIdx));
} else {
    console.log("?");
}
