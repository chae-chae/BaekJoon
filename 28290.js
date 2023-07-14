const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

if(input.includes("asdfjkl;")){
    console.log("stairs");
} else if(input.includes(";lkjfdsa")){
    console.log("reverse");
} else if(input.includes("fdsajkl;") || input.includes("jkl;fdsa")){
    console.log("in-out");
} else if(input.includes("asdf;lkj") || input.includes(";lkjasdf")){
    console.log("out-in");
} else {
    console.log("molu");
}
