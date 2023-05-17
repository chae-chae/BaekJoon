const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [tc, ...testcases] = input;

for(let i = 0; i<tc; i++){
    let cnt = 1;
    let loca = Number(testcases[i * 2].split(" ")[1]);
    let queue = testcases[i*2 +1].split(" ").map(Number); // priority
    while(1){
        const item = queue.shift();
        if(Math.max(...queue) <= item && loca === 0){ // most important <= current item's priority
            console.log(cnt);
            break;
        } else if(Math.max(...queue) > item && loca === 0){
            queue.push(item);
            loca = queue.length - 1;
        } else if(Math.max(...queue) > item){
            queue.push(item);
            loca--;
        } else if(Math.max(...queue) <= item){
            cnt++;
            loca--;
        }
    }
}
