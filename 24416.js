const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = Number(fs.readFileSync(filePath).toString().trim());

let cntZ = 0;
let cntDp = 0;
let f = Array(n).fill(0);

function fibZ(n) {
    if (n === 1 || n === 2) {
        cntZ++;
        return 1;
    } else {
        return (fibZ(n - 1) + fibZ(n - 2));
    }
}

function fibonacci(n) {
    f[1] = f[2] = 1;
    for(let i = 3; i<=n; i++){
        f[i] = f[i - 1] + f[i - 2];
        cntDp++;
    }
    return f[n];
}

fibZ(n);
fibonacci(n);

console.log(cntZ, cntDp);
