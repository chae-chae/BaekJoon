const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(input[0]);

let deck = [];
let ans = "";

for(let i = 1; i<=t; i++){
    const str = input[i];
    if(str.includes("push_front")){
        const num = Number(str.split(" ")[1]);
        deck.unshift(num);
    } else if(str.includes("push_back")){
        const num = Number(str.split(" ")[1]);
        deck.push(num);
    } else if(str.includes("pop_front")){
        if(deck.length === 0){
            ans += `${-1}\n`;
        } else {
            const num = deck[0];
            deck.splice(0, 1);
            ans += `${num}\n`;
        }
    } else if(str.includes("pop_back")){
        if(deck.length === 0){
            ans += `${-1}\n`;
        } else {
            ans += `${deck.pop()}\n`;
        }
    } else if(str.includes("size")){
        ans += `${deck.length} `;
    } else if(str.includes("empty")){
        if(deck.length === 0){
            ans += `${1}\n`;
        } else {
            ans += `${0}\n`;
        }
    } else if(str.includes("front")){
        if(deck.length === 0){
            ans += `${-1}\n`;
        } else {
            ans += `${deck[0]}\n`;
        }
    } else if(str.includes("back")){
        if(deck.length === 0){
            ans += `${-1}\n`;
        } else {
            ans += `${deck[deck.length - 1]}\n`;
        }
    }
}

console.log(ans.trim());
