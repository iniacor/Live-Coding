// input - array, callback
// output- new arr

// callback
// input - arr elem , index(optional), entire arr(optional)
// output - boolean

// algo
// 1 create new arr
// 2 iterate input arr
// 3 apply callback for every element
// 4 if true push
// const filterArrayElements = (arr, callback) => {
//   const arrRes = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (callback(arr[index])) {
//       arrRes.push(arr[index]);
//     }
//   }
//   return arrRes;
// };

// const wordLength = el => el.length > 5;

// const arr = ['orange', 'blue', 'green', 'red'];
// // - test data
// console.log(filterArrayElements(arr, callback));

const filterArrayElements = (arr, callback) => {
  const resArr = [];

  for (let index = 0; index < arr.length; index++) {
    const el = arr[index];
    if (callback(el, index, arr)) {
      resArr.push(el);
    }
  }
  return resArr;
};

// -- test data
const testArr = [1, 2, 11, 0, -5, 50, 77, 8, 100, NaN];
const testCallback = (el, index, arr) => {
  if (index > 5 && el > 10) {
    return true;
  }
  return false;
};

const filterRes = filterArrayElements(testArr, testCallback);
console.log(filterRes);

// -- multiply
// number1, number 2.... numberN

function multiply(...args) {
  // console.log(arguments);
  return args.reduce((acc, el) => acc * el);
}

// --test data
console.log(multiply(10, 2, 5, 7, -2));
