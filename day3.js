function sum(a, b, c) {
  let sum = 0;
  sum = sum + a;
  sum = sum + b;
  // c ? sum = sum + c : sum; // c ? baina uu ugvi yu gedgiig shalgaad sum = sum + c-g hewleed bhgvi bol sum-iig hewleh
  return sum;
}

let result = sum(1, 2, 3);
result = sum(result, 3);
result = sum(result, 4);
console.log(result);
