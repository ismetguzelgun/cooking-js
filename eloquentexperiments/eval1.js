const x = 1;
function evalAndReturnX(code) {
  eval(code);
  return xy;
}

console.log(evalAndReturnX("var xy = 2"));
// → 2
console.log(x);
// → 1

const {formatDate} = require("./format-date");

console.log(formatDate(new Date(2017, 9, 13),
                       "dddd the Do"));
// → Friday the 13th