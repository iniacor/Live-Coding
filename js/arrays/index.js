// input- none
// output - last element of array
//pop
const numbersList1 = [1, 2, 3, 4, 5];
console.log('befor pop', numbersList1);
let result = numbersList1.pop();
console.log('after pop', numbersList1);

const numbersList2 = [1, 2, 3, 4, 5];
// input- el(number)
// output - new length of array
//push
console.log('before push', numbersList2);
const pushRes = numbersList2.push(777);
console.log(pushRes);
console.log('after push', numbersList2);

//input - none
// output- first element of array
// shift
const numbersList3 = [1, 2, 3, 4, 5];
console.log('before shift', numbersList3);
const shiftRes = numbersList3.shift();
console.log(shiftRes);
console.log('after shift', numbersList3);

// input - callback function (тип данных и значение)
// output - new array
// filter()
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
// callback - array
// input - element(any type), index(optional), arr(optional)
// output -boolean
function filterCallback(element) {
  return element > 5;
}
// option 1
const filterRes = anotherNumbersList.filter(function filterCallback(element) {
  return element > 5;
});
// option 2
const filterRes2 = anotherNumbersList.filter(el => el > 5);
console.log(filterRes);

const resolver = num => console.log(num);
function sum(from, to, resolver) {
  let sumRes = 0;
  for (let index = from; index <= to; index++) {
    sumRes += index;
  }
  resolver(sumRes);
}

sum(1, 10, resolver);

function funkAlert(number) {
  alert(number);
}
function sendEmail(number) {
  //
}
