// input - array, callback
// output- new arr

// callback
// input - arr elem , index(optional), entire arr(optional)
// output - boolean

// algo
// 1 create new arr
// 2 iterate input arr
// 3 apply callback for every element
// 4 push el to arrRes

const mapArrayElements = (arr, callback) => {
  const resArr = [];

  for (let index = 0; index < arr.length; index++) {
    const el = arr[index];
    resArr.push(callback(el, index, arr));
  }
  return resArr;
};

// -- test data
// const testArr = [2, 2, 11, NaN, -5, Infinity, 8, 7.1];
// const testCallback = (el, index, arr) => (index > 3 ? el * el : el);

// const mapRes = mapArrayElements(testArr, testCallback);
// mapRes = testArr.map((el, index) => (index > 3 ? el * el : el));
// console.log(mapRes);
