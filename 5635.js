const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.splice(0, 1);

input = input.map((v) => v.split(" "));

input.sort((a, b) => {
    if(parseInt(a[3]) > parseInt(b[3])) return 1;
    if(parseInt(a[3]) < parseInt(b[3])) return -1;
    else if(parseInt(a[3]) == parseInt(b[3])){
        if(parseInt(a[2]) > parseInt(b[2])) return 1;
        if(parseInt(a[2]) < parseInt(b[2])) return -1;
        else if(parseInt(a[2]) == parseInt(b[2])){
            if(parseInt(a[1]) > parseInt(b[1])) return 1;
            if(parseInt(a[1]) < parseInt(b[1])) return -1;
        }
    }
})

console.log(`${input[input.length-1][0]}\n${input[0][0]}`);
