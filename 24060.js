const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let cnt = 0;
let ans = -1;

function merge(l, r){
  let res = [];
  let i = 0;
  let j = 0;

  while (i < l.length && j < r.length) {
    if (l[i] < r[j]) {
      res.push(l[i]);
      i++;
    } else {
      res.push(r[j]);
      j++;
    }
    cnt++;
    if (cnt === k) ans = res[res.length - 1];
  }

  while (i < l.length) {
    res.push(l[i]);
    i++;
    cnt++;
    if (cnt === k) ans = res[res.length - 1];
  }

  while (j < r.length) {
    res.push(r[j]);
    j++;
    cnt++;
    if (cnt === k) ans = res[res.length - 1];
  }
  return res;
}

function mergeSort(arr){
  if (arr.length <= 1) return arr;
  let mid = Math.ceil(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort(arr);
console.log(ans);
