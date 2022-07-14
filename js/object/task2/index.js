'use strict';

/**
//  * @param {string[]} keysList
//  * @param {array} valuesList
//  * @return {object}
//  */
// algo
// 1. create new obj +++
// 2. iterate keylist +++
// 3. put key/value to the obj
// function buildObject(keysList, valuesList) {
//   const obj = {};

//   for (let index = 0; index < keysList.length; index += 1) {
//     obj[keysList[index]] = valuesList[index];
//   }
//   return obj;
// }
// --refactoring--
function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});
}

// test Data
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
// console.log(result);

// input obj,obj
// output boolean

// algo
// 1. get keys1, keys2
// 2. if length !== Length2 ==> false
// 3. iterate keys1
// 4. compare ke1/value1 & key2/value2
// 5. if step 4 === false ===> false
// function compareObjects(obj1, obj2) {
//   // input
// }

// // examples
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   age: 17,
// };

// const obj3 = {
//   name: 'Bob',
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   name: 'Tom',
//   age: 17,
// };

// compareObjects(obj1, obj2); // ==> false
// compareObjects(obj2, obj3); // ==> false
// compareObjects(obj1, obj4); // ==> true
