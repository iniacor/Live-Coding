function getSenseOfLife() {
  return 42;
}

//--- test data
const res = getSenseOfLife();
console.log(res);
//option 2
console.log(getSenseOfLife());

const getSquared = num => num * num;
//----test data
console.log(getSquared(2));

function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}
//----test data
console.log(sum(9, 9));
console.log(sum('f', 9));

function printMessage(age) {
  return `I'm ${age} years old`;
}
//----test data
console.log(printMessage(25));
console.log(printMessage(true));
console.log(printMessage('name'));
console.log(printMessage(-7));
console.log(printMessage({}));

const mult = (firstNum, secondNum) => firstNum * secondNum;
//----test data
console.log(mult(2, 4));
console.log(mult(-2, 4));
console.log(mult(Infinity, 4));
console.log(mult(-4, 4));
console.log(mult(4, -4));

function sumFunc(from, to) {
  let result = 0;
  for (let index = from; index <= to; index += 1) {
    res += index;
  }
  return result;
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sumFunc(firstFrom, firstTo) > sumFunc(secondFrom, secondTo);
}

//----test data
console.log(compareSums(5, 7));
console.log(compareSums(7, 5));

const getMagicNumber = () => 17;
//----test data
console.log(getMagicNumber());
console.log(getMagicNumber('17'));
console.log(getMagicNumber(17));

console.log(getSquared(sum(10, 20)));
