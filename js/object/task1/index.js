/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

' use strict ';

const transaction = {
  value: 170,
};
// input obj,string,string
// output  none
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// test Data
// console.log(addPropertyV1(transaction, 'name', 'Ihor'));

// input target object, object 1, ob2...
// output obg
function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}
// test Data
// console.log(addPropertyV2(transaction, 'name', 'ihor'));
// console.log(transaction);

// input target object, object 1, ob2...
// output obg
function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}
// test Data
// const res1 = addPropertyV3(transaction, 'currency', 'usd');
// const res2 = addPropertyV3(res1, 'amount', 300);
// console.log('result test 1', res1);
// console.log('result test 2', res2);
// console.log('object afteer', transaction);
// console.log(addPropertyV3(transaction, 'name', 'ihor'));
// console.log(transaction);

// input target object, object 1, ob2...
// output obg
function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}
// test Data
// console.log(addPropertyV4(transaction, 'name', 'ihor'));
// console.log(transaction);
