const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let sum = 1000 - input;
let cnt = 0;

let coin = 500;
while(sum > 0){
    sum -= coin;
    cnt++;
    if(sum < 0){
        sum += coin;
        cnt--;
        break;
    }
}

coin = 100;
while(sum > 0){
    sum -= coin;
    cnt++;
    if(sum < 0){
        sum += coin;
        cnt--;
        break;
    }
}

coin = 50;
while(sum > 0){
    sum -= coin;
    cnt++;
    if(sum < 0){
        sum += coin;
        cnt--;
        break;
    }
}

coin = 10;
while(sum > 0){
    sum -= coin;
    cnt++;
    if(sum < 0){
        sum += coin;
        cnt--;
        break;
    }
}

coin = 5;
while(sum > 0){
    sum -= coin;
    cnt++;
    if(sum < 0){
        sum += coin;
        cnt--;
        break;
    }
}

coin = 1;
while(sum > 0){
    sum -= coin;
    cnt++;
    if(sum < 0){
        sum += coin;
        cnt--;
        break;
    }
}

console.log(cnt);
