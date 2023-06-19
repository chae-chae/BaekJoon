const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

if(input === "SONGDO"){
    console.log("HIGHSCHOOL");
} else if(input === "CODE"){
    console.log("MASTER");
} else if(input === "2023"){
    console.log("0611");
} else {
    console.log("CONTEST");
}
