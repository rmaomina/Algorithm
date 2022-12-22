
// const path = __dirname + '/input_boj4.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()

const stack = [];

const parseBracket = (bracket) => {
  const pair = bracket === ')' ? '(' : '[';
  const last = stack.pop();

  if (last === pair) {
    stack.push(pair === '(' ? 2 : 3);
    return true;
  }
  if (typeof last === 'number') {
    let temp = last;
    let t = stack.length;
    while (t--) {
      const last = stack.pop();
      if (last === pair) {
        stack.push(temp * (pair === '(' ? 2 : 3));
        return true;
      } else if (typeof last === 'number') {
        temp += last;
        continue;
      } else {
        return false;
      }
    }
  }
  return false;
};

const bracketList = input.split('');
let i = 0;

do {
  const bracket = bracketList[i];
  if (bracket === '(' || bracket === '[') stack.push(bracket);
  else {
    if (!parseBracket(bracket)) {
      console.log(0);
      break;
    }
  }
  i++;

  if (i === bracketList.length) {
    if (stack.length > 0 && !stack.find((e) => typeof e === 'string'))
      console.log(stack.reduce((acc, curr) => acc + curr));
    else console.log(0);
  }
} while (i < bracketList.length);