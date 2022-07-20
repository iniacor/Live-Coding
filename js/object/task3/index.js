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
//   Bob: 'name',
// };
// const obj5 = {
//   name: 'Tom',
//   Bob: 'name',
// };

// algo
// 1. get keys1, keys2
// 2. if length !== Length2 ==> false
// 3. iterate keys1
// 4. compare ke1/value1 & key2/value2
// 5. if step 4 === false ===> false

// function compareObjects(obj1, obj2) {
//   return Object.keys({ ...obj1, ...obj2 }).every(key => obj1[key] === obj2[key]);
// }

// console.log(compareObjects(obj2, obj4)); // false
// compareObjects(obj1, obj2); // ==> false
// compareObjects(obj2, obj3); // ==> false
// compareObjects(obj1, obj4); // ==> true
// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   return keys1.every(key => obj1[key] === obj2[key]);
// }

// ============ next ===============
// ОбЪект в массив пользователей
// const customers = {
//   'customer-id-1': {
//     name: 'William',
//     age: 54,
//   },
//   'customer-id-2': {
//     name: 'Tom',
//     age: 17,
//   },
// };

// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((a, b) => (a.age > b.age ? 1 : -1));
