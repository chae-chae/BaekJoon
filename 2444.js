const input = require("fs").readFileSync("/dev/stdin").toString().trim();

solution(input);

function solution(input) {
  let answer = "";
  for (let i = 1; i <= input; i++) {
    if (i < input) {
      answer += " ".repeat(input - i);
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      answer += "*";
    }
    answer += "\n";
  }
  for (let i = 1; i <= input; i++) {
    if (i != input) {
      answer += " ".repeat(i);
    }
    for (let j = 2 * (input - i) - 1; j >= 1; j--) {
      answer += "*";
    }
    if (i != input) {
      answer += "\n";
    }
  }
  console.log(answer);
}
