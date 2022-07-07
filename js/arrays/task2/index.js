const numbersList = [5, 0, 8, 10, -4, 50, 220];
console.log(numbersList);
input - callback;
output - array;

// callack
// input - el of array
// output -  new el
// --MAP
// option 1
const mapRes = numberList.map((el, index) => (index > 2 ? el * el : el));
const mapResult = numbersList.map(el => {
  const newEl = el * el;
  return newEl;
});
// option 2
const mapResult = numbersList.map(el => el * el);
console.log(mapResult);

// --FOREACH
// input - callback
// output - undefined

// callack
// input - el of array
// output -  undefined
// numbersList.forEach(el => {
//   if (el > 0) {
//     console.log(el);
//   }
// });

// --REDUCE
// input- callback, acc init value
// output -последний результат выполнения колбэк-функции

// callback
// input - acc, element, index, array
// output - new acc
// option 1
const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];
transactions.reduce((sum, el) => {
  console.log('sum', sum);
  console.log('el', el);
  if (el > 100) {
    return sum + el;
  }
  return sum;
}, 0);
// option 2
const reduceSum = transactions.reduce((sum, el) => (el > 100 ? sum + el : sum), 0);
